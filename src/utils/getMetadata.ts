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

  const cities = [
    'Киров', 'Кировская область',
    'Пермь', 'Пермский край',
    'Уфа', 'Башкирия', 'Республика Башкортостан',
    'Нижний Новгород', 'Нижегородская область',
    'Екатеринбург', 'Свердловская область',
    'Оренбург', 'Оренбургская область',
    'Самара', 'Самарская область',
    'Новосибирск', 'Новосибирская область',
    'Кемерово', 'Кемеровская область',
    'Москва', 'Московская область',
    'Челябинск', 'Челябинская область',
    'Нижний Тагил', 'Свердловская область',
    'Казань', 'Республика Татарстан'
  ];

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
    ...cities
  ];

  const metadataKeywords = Array.isArray(props.keywords)
    ? [...props.keywords, ...cities].join(', ')
    : props.keywords ?? defaultKeywords.join(', ');

  const cityDescription = cities.join(', ');

  return {
    title: props.title ?? 'Бесплатная помощь зависимым в России',
    description:
      props.description ??
      `Психологическая помощь, юридическая консультация, семейное и финансовое консультирование, помощь людям с ограниченными возможностями, бездомным, наркозависимым и алкоголезависимым в городах: ${cityDescription}. Звоните: ☎️${MAIN_PHONE_NUMBER}, ☎️${SECOND_PHONE_NUMBER} или пишите: ${MAIN_EMAIL}`,
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
      description: props.description ?? `Психологическая помощь, юридическая консультация, семейное и финансовое консультирование, помощь людям с ограниченными возможностями, бездомным, наркозависимым и алкоголезависимым в городах: ${cityDescription}.`,
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
    other: {
      'yandex-verification': '07c30b0770e6567f',
      'google-site-verification': 'Es1etisPASiWvXIWEfo788aAH534wlF1ZlO8-8ZpSLY',
      'geo.region': 'RU',
      'geo.placename': 'Россия, ' + cities.join(', '),
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