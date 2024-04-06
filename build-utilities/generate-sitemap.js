const fs = require("fs");
const { url } = require("inspector");
const path = require("path");

function generateSitemap() {
  const pages = [
    {
      url: "https://www.drsandeshneurologist.com",
      changefreq: "daily",
      priority: "1.0",
    },
    { url: "https://www.drsandeshneurologist.com/blogs", changefreq: "weekly" },
    {
      url: "https://www.drsandeshneurologist.com/services",
      changefreq: "daily",
    },
    {
      url: "https://www.drsandeshneurologist.com/contactus",
      changefreq: "daily",
    },
  ];

  const sitemap = generateSitemapXml(pages);

  fs.writeFileSync(path.resolve("./public/sitemap.xml"), sitemap);
}

function generateSitemapXml(pages) {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset
          xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    <!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->
    `;

  pages.forEach((page) => {
    xml += `<url>
        <loc>${page.url}</loc>
        <changefreq>${page.changefreq || "daily"}</changefreq>
        <priority>${page.priority || "0.5"}</priority>
      </url>`;
  });

  xml += `</urlset>`;
  return xml;
}

generateSitemap();
