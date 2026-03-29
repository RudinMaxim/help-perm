/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      // Локальная разработка
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      // Продакшен — поддомен CMS (Punycode форма кириллического домена)
      // cms.бесплатная-помощь-зависимым.рф
      {
        protocol: 'https',
        hostname: 'cms.xn-----6kcacbmswma1aqgaftblf9apk9o7br8e.xn--p1ai',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
