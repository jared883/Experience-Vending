import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  // Strip trailing slashes (e.g. /rentals/ -> /rentals) so each page has one URL.
  app.use((req, res, next) => {
    if ((req.method === "GET" || req.method === "HEAD") && req.path.length > 1 && req.path.endsWith("/") && !req.path.startsWith("/api")) {
      const query = req.url.slice(req.path.length);
      return res.redirect(301, req.path.replace(/\/+$/, "") + query);
    }
    next();
  });

  // Prerendered pages live at /<route>.html (built by script/build.ts), so
  // `extensions` lets /rentals serve rentals.html with real content for crawlers.
  app.use(
    express.static(distPath, {
      extensions: ["html"],
      setHeaders(res, filePath) {
        if (filePath.includes(`${path.sep}assets${path.sep}`)) {
          // Vite's hashed build assets never change
          res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
        } else if (filePath.endsWith(".html")) {
          res.setHeader("Cache-Control", "no-cache");
        }
      },
    }),
  );

  // Unknown routes: real 404 status (avoids "soft 404s" in Google) but still
  // serve the app so visitors see the styled Not Found page.
  const notFoundPage = path.resolve(distPath, "404.html");
  const indexPage = path.resolve(distPath, "index.html");
  app.use("/{*path}", (_req, res) => {
    if (fs.existsSync(notFoundPage)) {
      res.status(404).sendFile(notFoundPage);
    } else {
      // fallback if prerendering was skipped
      res.sendFile(indexPage);
    }
  });
}
