import { BLOGS_DATA } from "@/config/blogs";
import { CLINIC_CONFIG } from "@/config/clinic";

export async function GET() {
  const feedItems = BLOGS_DATA.map((post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${CLINIC_CONFIG.domain}/blog/${post.slug}</link>
      <description>${escapeXml(post.shortDesc)}</description>
      <pubDate>${new Date(post.publishedDate).toUTCString()}</pubDate>
      <guid>${CLINIC_CONFIG.domain}/blog/${post.slug}</guid>
    </item>
  `).join("");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(CLINIC_CONFIG.name)} Blog</title>
    <link>${CLINIC_CONFIG.domain}/blog</link>
    <description>${escapeXml(CLINIC_CONFIG.tagline)}</description>
    <language>en-in</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${feedItems}
  </channel>
</rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=1200, stale-while-revalidate=600"
    }
  });
}

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<": return "&lt;";
      case ">": return "&gt;";
      case "&": return "&amp;";
      case "'": return "&apos;";
      case '"': return "&quot;";
      default: return c;
    }
  });
}
