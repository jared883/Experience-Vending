import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.getElementById("root")!;

// Production pages are prerendered to static HTML at build time (see script/build.ts),
// so hydrate them. Prerendered markup assumes no query string (e.g. /rentals?package=basic
// preselects a package), so in that case — and in dev, where the root is empty — render fresh.
if (container.hasChildNodes() && !window.location.search) {
  hydrateRoot(container, <App />);
} else {
  container.innerHTML = "";
  createRoot(container).render(<App />);
}
