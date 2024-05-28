import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const rootUrl = process.env.NEXT_PUBLIC_URL;

  // cleanParam: [
  //   'opt? /opt',
  //   'opt?',
  // ],

  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/company',
        '/fulfillment',
        '/delivery',
        '/contact-us',
        '/requisites',
        '/certificates',
        '/blagodarnosti',
        '/postavshikam',
        '/faq',
        '/requisites',
        '/vakansii',
        '/opt',
      ],
      disallow: [
        '/api',
        '/api/',
        '/api/?',
        '/api?',
        '/privacy',
        '/privacy/',
        '/privacy/?',
        '/privacy?',
        '/opt/registration',
        '/opt/registration/',
        '/opt/registration/?',
        '/opt/registration?',
        '/shopblog',
        '/shopblog/',
        '/shopblog/?',
        '/shopblog?',
        '/opt_tea',
        '/opt_tea/',
        '/opt_tea/?',
        '/opt_tea?',
        '*.php',
        '*.php?',
        '/*?',
      ],
    },
    host: rootUrl,
    sitemap: rootUrl+'/sitemap.xml',
  };
}