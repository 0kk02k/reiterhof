import { MetadataRoute } from 'next';

/**
 * Dynamic Sitemap Generator
 * Automatically informs search engines about all available pages.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.biohof-muehlenberg.de';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/reitschule`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/biohof`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}
