import { MAIN_PHONE_NUMBER } from '@/constants/phone';
import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Благотворительная помощь в России',
    short_name: 'Благотворительность',
    description:
      `Психологическая помощь, юридическая консультация, семейное и финансовое консультирование, помощь людям с ограниченными возможностями, бездомным, наркозависимым и алкоголезависимым по всей России. ☎️ Звоните: ${MAIN_PHONE_NUMBER}`,
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
