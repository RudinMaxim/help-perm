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
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Благотворительная помощь в России',
    url: BASE_URL,
    logo: `${BASE_URL}/android-chrome-512x512.png`,
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
  };

  return {
    title: props.title ?? 'Бесплатная помощь зависимым в России',
    description:
      props.description ??
      `Психологическая помощь, юридическая консультация, семейное и финансовое консультирование, помощь людям с ограниченными возможностями, бездомным, наркозависимым и алкоголезависимым. Звоните: ☎️${MAIN_PHONE_NUMBER}, ☎️${SECOND_PHONE_NUMBER} или пишите: ${MAIN_EMAIL}`,
    keywords: Array.isArray(props.keywords)
      ? props.keywords.join(', ')
      : props.keywords ?? [
          'благотворительность',
          'помощь',
          'психологическая помощь',
          'юридическая консультация',
          'семейное консультирование',
          'финансовое консультирование',
          'люди с ограниченными возможностями',
          'помощь бездомные',
          'помощь наркозависимость',
          'помощь алкоголизм',
          'помощь москва',
          'помощь санкт-петербург',
          'помощь новосибирск',
          'помощь екатеринбург',
          'помощь нижний новгород',
          'помощь казань',
          'помощь челябинск',
          'помощь омск',
          'помощь самара',
          'помощь ростов-на-дону',
          'помощь уфа',
          'помощь красноярск',
          'помощь пермь',
          'помощь воронеж',
          'помощь волгоград',
          'помощь краснодар',
          'помощь саратов',
          'помощь тюмень',
          'помощь тольятти',
          'помощь ижевск',
          'помощь барнаул',
          'помощь ульяновск',
          'помощь иркутск',
          'помощь хабаровск',
          'помощь ярославль',
          'помощь владивосток',
          'помощь махачкала',
          'помощь томск',
          'помощь оренбург',
          'помощь кемерово',
          'помощь новокузнецк',
          'помощь рязань',
          'помощь астрахань',
          'помощь наб.челны',
          'помощь пенза',
          'помощь липецк',
          'помощь киров',
          'помощь чебоксары',
          'помощь калининград',
          'помощь курск',
          'помощь ставрополь',
          'помощь тверь',
          'помощь сочи',
          'помощь смоленск',
          'помощь брянск',
        ],
    viewport:
      'width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no',
    formatDetection: {
      telephone: true,
    },
    alternates: {
      canonical: props.url ? `${BASE_URL}/${props.url}` : BASE_URL,
    },
    other: {
      'og:type': 'website',
      'og:title': `${props.title ?? 'Бесплатная помощь зависимым в России'}`,
      'og:url': `${props.url ? BASE_URL + '/' + props.url : BASE_URL + '/'}`,
      'og:description':
        'Психологическая помощь, юридическая консультация, семейное и финансовое консультирование, помощь людям с ограниченными возможностями, бездомным, наркозависимым и алкоголезависимым. Звоните: ☎️+7 (922) 922-80-04, ☎️+7 (923) 523-11-51 или пишите: 💌blagotvoritelnostperm@gmail.com',
      'og:site_name': 'Бесплатная помощь зависимым',
      'og:locale': 'ru_RU',
      'og:locale:alternate': 'en_US',
      'og:image': `${BASE_URL}/android-chrome-512x512.png`,
      'og:image:width': '512',
      'og:image:height': '512',
      'og:image:alt': 'Логотип благотворительной организации',
      'og:image:type': 'image/png',
      'og:image:secure_url': `${BASE_URL}/android-chrome-512x512.png`,
      'yandex-verification': '07c30b0770e6567f',
      'script:ld+json': JSON.stringify(jsonLd),
    },
  };
};
