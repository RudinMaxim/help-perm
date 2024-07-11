import {
  MAIN_EMAIL,
  MAIN_PHONE_NUMBER,
  SECOND_PHONE_NUMBER,
} from '@/constants/phone';
import { BASE_URL } from '@/constants/url';
import { type Metadata } from 'next';

interface IMetadata {
  title?: string;
  description?: string;
  keywords?: string | Array<string>;
  url?: string;
}

export const getMetadata = (props: IMetadata): Metadata => {
  const jsonLd = {
    '@type': 'Organization',
    name: 'Благотворительная помощь в России',
    url: BASE_URL,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: MAIN_PHONE_NUMBER,
        contactType: 'customer support',
      },
      {
        '@type': 'ContactPoint',
        telephone: SECOND_PHONE_NUMBER,
        contactType: 'customer support',
      },
      {
        '@type': 'ContactPoint',
        email: MAIN_EMAIL,
        contactType: 'customer support',
      },
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Россия',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'RU',
    },
  };

  const defaultKeywords = [
    'благотворительность',
    'помощь',
    'помощь зависимым',
    'психологическая помощь',
    'юридическая консультация',
    'семейное консультирование',
    'финансовое консультирование',
    'помощь пострадавшим',
    'помощь зависимым людям',
    'люди с ограниченными возможностями',
    'помощь бездомным',
    'помощь наркозависимым',
    'помощь алкоголезависимым',
    'помощь в России',
  ];

  const metadataKeywords = Array.isArray(props.keywords)
    ? props.keywords.join(', ')
    : props.keywords ?? defaultKeywords.join(', ');

  return {
    title: props.title ?? 'Бесплатная помощь зависимым в России',
    description:
      props.description ??
      `Психологическая помощь, юридическая консультация, семейное и финансовое консультирование, помощь людям с ограниченными возможностями, бездомным, наркозависимым и алкоголезависимым. Звоните: ☎️${MAIN_PHONE_NUMBER}, ☎️${SECOND_PHONE_NUMBER} или пишите: ${MAIN_EMAIL}`,
    keywords: metadataKeywords,
    authors: [{ name: 'Благотворительная организация' }],
    viewport: {
      width: 'device-width',
      initialScale: 1,
      userScalable: false,
    },
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: 'white' },
      { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: props.url ? `${BASE_URL}/${props.url}` : BASE_URL,
    },
    openGraph: {
      type: 'website',
      locale: 'ru_RU',
      url: props.url ? `${BASE_URL}/${props.url}` : BASE_URL,
      title: props.title ?? 'Бесплатная помощь зависимым в России',
      description: props.description ?? 'Психологическая помощь, юридическая консультация, семейное и финансовое консультирование, помощь людям с ограниченными возможностями, бездомным, наркозависимым и алкоголезависимым.',
      siteName: 'Бесплатная помощь зависимым',
      images: [
        {
          url: `${BASE_URL}/android-chrome-512x512.png`,
          width: 512,
          height: 512,
          alt: 'Логотип благотворительной организации',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: props.title ?? 'Бесплатная помощь зависимым в России',
      description: props.description ?? 'Психологическая помощь, юридическая консультация, семейное и финансовое консультирование, помощь людям с ограниченными возможностями, бездомным, наркозависимым и алкоголезависимым.',
      images: [`${BASE_URL}/android-chrome-512x512.png`],
    },
    other: {
      'yandex-verification': '07c30b0770e6567f',
      'google-site-verification': 'Es1etisPASiWvXIWEfo788aAH534wlF1ZlO8-8ZpSLY', // Замените на ваш код верификации Google
      'msvalidate.01': 'YOUR_BING_VERIFICATION_CODE', // Замените на ваш код верификации Bing
      'geo.region': 'RU',
      'geo.placename': 'Россия',
      'geo.position': '61.52401;105.318756',
      'ICBM': '61.52401, 105.318756',
      'og:locale:alternate': 'en_US',
      'script:ld+json': JSON.stringify(jsonLd)
    },
    formatDetection: {
      telephone: true,
      date: true,
      address: true,
      email: true,
      url: true,
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    applicationName: 'Благотворительная помощь в России',
    referrer: 'origin-when-cross-origin',
    creator: 'Благотворительная организация',
    publisher: 'Благотворительная организация',
    category: 'charity',
    classification: 'Благотворительность, Социальная помощь',
    metadataBase: new URL(BASE_URL),
    
  };
};