import { BASE_URL } from '@/constants/url';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/consultation', '/aboutus', '/results', '/requisites'],
    },
    host: BASE_URL,
    sitemap: BASE_URL + '/sitemap.xml',
  };
}
