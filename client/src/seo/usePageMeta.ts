import { useEffect } from "react";
import { canonicalUrl, getPageMeta } from "./meta";

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/** Keeps <title>, description, canonical and OG/Twitter tags in sync on client-side navigation. */
export function usePageMeta(path: string) {
  useEffect(() => {
    const meta = getPageMeta(path);
    const url = canonicalUrl(path, meta);
    document.title = meta.title;
    setMeta("name", "description", meta.description);
    setMeta("name", "robots", meta.noindex ? "noindex, follow" : "index, follow, max-image-preview:large");
    setMeta("property", "og:title", meta.title);
    setMeta("property", "og:description", meta.description);
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:title", meta.title);
    setMeta("name", "twitter:description", meta.description);

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (meta.noindex) {
      link?.remove();
    } else {
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = url;
    }
  }, [path]);
}
