import { build as esbuild } from "esbuild";
import { build as viteBuild } from "vite";
import { rm, readFile, writeFile } from "fs/promises";
import path from "path";
import { pathToFileURL } from "url";
import {
  renderHeadTags,
  INDEXABLE_ROUTES,
  LOCAL_BUSINESS_JSONLD,
  WEBSITE_JSONLD,
} from "../client/src/seo/meta";

// server deps to bundle to reduce openat(2) syscalls
// which helps cold start times
const allowlist = [
  "@google/generative-ai",
  "axios",
  "connect-pg-simple",
  "cors",
  "date-fns",
  "drizzle-orm",
  "drizzle-zod",
  "express",
  "express-rate-limit",
  "express-session",
  "jsonwebtoken",
  "memorystore",
  "multer",
  "nanoid",
  "nodemailer",
  "openai",
  "passport",
  "passport-local",
  "pg",
  "stripe",
  "uuid",
  "ws",
  "xlsx",
  "zod",
  "zod-validation-error",
];

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  console.log("building client...");
  await viteBuild();

  await prerender();

  console.log("building server...");
  const pkg = JSON.parse(await readFile("package.json", "utf-8"));
  const allDeps = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ];
  const externals = allDeps.filter((dep) => !allowlist.includes(dep));

  await esbuild({
    entryPoints: ["server/index.ts"],
    platform: "node",
    bundle: true,
    format: "cjs",
    outfile: "dist/index.cjs",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: true,
    external: externals,
    logLevel: "info",
  });
}

/**
 * SEO: write one static HTML file per route with route-specific <head> tags and
 * JSON-LD, plus server-rendered page markup (pure Node via react-dom/server; no
 * browser needed). If server rendering fails for any reason the pages still get
 * the correct head tags and fall back to normal client rendering, so the build
 * never breaks because of this step.
 */
async function prerender() {
  console.log("prerendering routes...");
  const outDir = path.resolve("dist/public");
  const template = await readFile(path.join(outDir, "index.html"), "utf-8");
  const jsonLd = [LOCAL_BUSINESS_JSONLD, WEBSITE_JSONLD]
    .map((d) => `<script type="application/ld+json">${JSON.stringify(d).replace(/</g, "\\u003c")}</script>`)
    .join("\n    ");

  let render: ((url: string) => string) | null = null;
  const ssrDir = path.resolve("dist/ssr");
  try {
    await viteBuild({
      logLevel: "warn",
      build: {
        ssr: "src/entry-server.tsx",
        outDir: ssrDir,
        emptyOutDir: true,
        copyPublicDir: false,
        rollupOptions: { output: { format: "esm", entryFileNames: "entry-server.mjs" } },
      },
      ssr: { noExternal: true },
    });
    const mod = await import(pathToFileURL(path.join(ssrDir, "entry-server.mjs")).href);
    render = mod.render;
  } catch (err) {
    console.warn("[prerender] SSR build failed — pages will only get static head tags:", err);
  }

  const pages: Array<[string, string]> = [
    ...INDEXABLE_ROUTES.map((r) => [r, r === "/" ? "index.html" : `${r.slice(1)}.html`] as [string, string]),
    ["/book", "book.html"],
    ["/404", "404.html"],
  ];

  for (const [route, file] of pages) {
    let body = "";
    if (render) {
      try {
        body = render(route);
      } catch (err) {
        console.warn(`[prerender] could not render ${route}, using client rendering:`, err);
      }
    }
    const html = template
      .replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, () => renderHeadTags(route))
      .replace("<!--jsonld-->", () => jsonLd)
      .replace('<div id="root"></div>', () => `<div id="root">${body}</div>`);
    await writeFile(path.join(outDir, file), html);
    console.log(`  ${route} -> ${file}${body ? "" : " (head only)"}`);
  }

  await rm(ssrDir, { recursive: true, force: true });
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
