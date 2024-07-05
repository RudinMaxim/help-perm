import { BASE_URL } from '@/constants/url';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/contact', '/aboutus', '/results'],
    },
    host: BASE_URL,
    sitemap: BASE_URL + '/sitemap.xml',
  };
}
