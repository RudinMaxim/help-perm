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
  return {
    title: props.title ?? 'Благотворительная помощь в России',
    description:
      props.description ??
      `Психологическая помощь, юридическая консультация, семейное и финансовое консультирование, помощь людям с ограниченными возможностями, бездомным, наркозависимым и алкоголезависимым. Звоните: ${MAIN_PHONE_NUMBER}, ${SECOND_PHONE_NUMBER} или пишите: ${MAIN_EMAIL}`,
    keywords: props.keywords ?? [
      'благотворительность',
      'помощь',
      'психологическая помощь',
      'юридическая консультация',
      'семейное консультирование',
      'финансовое консультирование',
      'люди с ограниченными возможностями',
      'бездомные',
      'наркозависимость',
      'алкоголизм',
      'москва',
      'санкт-петербург',
      'новосибирск',
      'екатеринбург',
      'нижний новгород',
      'казань',
      'челябинск',
      'омск',
      'самара',
      'ростов-на-дону',
      'уфа',
      'красноярск',
      'пермь',
      'воронеж',
      'волгоград',
      'краснодар',
      'саратов',
      'тюмень',
      'тольятти',
      'ижевск',
      'барнаул',
      'ульяновск',
      'иркутск',
      'хабаровск',
      'ярославль',
      'владивосток',
      'махачкала',
      'томск',
      'оренбург',
      'кемерово',
      'новокузнецк',
      'рязань',
      'астрахань',
      'наб.челны',
      'пенза',
      'липецк',
      'киров',
      'чебоксары',
      'калининград',
      'курск',
      'ставрополь',
      'тверь',
      'сочи',
      'смоленск',
      'брянск',
      'белгород',
    ],
    alternates: {
      canonical: props.url ? `${BASE_URL}/${props.url}` : BASE_URL,
    },
    other: {
      'og:type': 'website',
      'og:title': `${props.title ?? 'Благотворительная помощь в России'}`,
      'og:url': `${props.url ? BASE_URL + '/' + props.url : BASE_URL + '/'}`,
      'og:description':
        'Психологическая помощь, юридическая консультация, семейное и финансовое консультирование, помощь людям с ограниченными возможностями, бездомным, наркозависимым и алкоголезависимым. Звоните: +7 (922) 922-80-04, +7 (923) 523-11-51 или пишите: blagotvoritelnostperm@gmail.com',
      'og:site_name': 'Благотворительная помощь',
      'og:locale': 'ru_RU',
      'og:locale:alternate': 'en_US',
      'og:image': `${BASE_URL}/android-chrome-512x512.png`,
      'og:image:width': '512',
      'og:image:height': '512',
      'og:image:alt': 'Логотип благотворительной организации',
      'og:image:type': 'image/png',
      'og:image:secure_url': `${BASE_URL}/android-chrome-512x512.png`,
    },
  };
};
