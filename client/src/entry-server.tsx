// Build-time prerender entry (pure Node, no browser). Used by script/build.ts.
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";

export { renderHeadTags, INDEXABLE_ROUTES } from "./seo/meta";

export function render(url: string): string {
  return renderToString(
    <Router ssrPath={url}>
      <App />
    </Router>,
  );
}
