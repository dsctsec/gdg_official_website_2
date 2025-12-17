export default function robots() {
  const base = "https://gdgtsecoffical.dpdns.org";
  return {
    rules: [
      // Allow all bots by default
      { userAgent: "*", allow: "/" },
      // Explicitly allow major AI bots
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Amazonbot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
      { userAgent: "meta-externalagent", allow: "/" },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}