export default function sitemap() {
  const base = "https://gdgtsecoffical.dpdns.org";
  const now = new Date().toISOString();
  const pages = ["/", "/events", "/teams", "/sponsors", "/contact"];

  return pages.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: p === "/" ? "weekly" : "monthly",
    priority: p === "/" ? 1.0 : 0.8,
  }));
}