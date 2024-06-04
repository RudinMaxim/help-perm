import { type Metadata } from 'next';
import { BASE_URL } from '../constants/url';

interface IMetadata {
  title?: string;
  description?: string;
  keywords?: string | Array<string>;
  url?: string;
}

export const getMetadata = (props: IMetadata): Metadata => {
  return {
    title: props.title ?? 'Maksim Rudin',

    description:
      props.description ??
      `Наша организация готова оказать профессиональную помощь и поддержку в решении различных жизненных проблем. Независимо от ситуации, мы поможем найти решение и пройти этот путь вместе с вами.`,
    keywords: props.keywords ?? [
      'помощь',
      'поддержка',
      'решение проблем',
      'жизненные трудности',
      'психологическая помощь',
      'социальная поддержка',
      'консультация',
      'сопровождение',
      'профессиональная помощь',
    ],
    icons: [
      {
        url: `${BASE_URL}/android-chrome-512x512.png`,
        sizes: '512x512',
        type: 'image/png',
      },
      {
        url: `${BASE_URL}/android-chrome-192x192.png`,
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: `${BASE_URL}/apple-touch-icon.png`,
        sizes: '180x180',
        type: 'image/png',
      },
      {
        url: `${BASE_URL}/favicon-32x32.png`,
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: `${BASE_URL}/favicon-16x16.png`,
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    other: {
      'og:type': 'website',
      'og:title': `${
        props.title ?? 'Помощь рядом - Поддержка и решение жизненных проблем'
      }`,
      'og:url': `${props.url ? BASE_URL + '/' + props.url : BASE_URL + '/'}`,
      'og:description':
        'Наша организация готова оказать профессиональную помощь и поддержку в решении различных жизненных проблем. Независимо от ситуации, мы поможем найти решение и пройти этот путь вместе с вами.',
      'og:site_name': 'Помощь рядом',
      'og:locale': 'ru_RU',
      'og:locale:alternate': 'en_US',
      'og:image': `${BASE_URL}/android-chrome-512x512.png`,
      'og:image:width': '512',
      'og:image:height': '512',
      'og:image:alt': '',
      'og:image:type': 'image/png',
      'og:image:secure_url': `${BASE_URL}/android-chrome-512x512.png`,
    },
  };
};
