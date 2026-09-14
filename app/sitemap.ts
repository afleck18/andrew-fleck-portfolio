import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap { const base=process.env.NEXT_PUBLIC_SITE_URL||"https://afleck18.github.io/andrew-fleck-portfolio"; return ["","/research","/publications","/publications/geometry-induced-observers","/about"].map(path=>({url:`${base}${path}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:path?0.8:1})); }
