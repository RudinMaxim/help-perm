import { redirect } from 'next/navigation';
import { getMetadata } from '@/utils/getMetadata';
import { Metadata } from 'next';

export const metadata: Metadata = getMetadata({
  title: 'О нас - Бесплатная помощь зависимым по всей России',
  description: 'Узнайте больше о нашей некоммерческой организации, которая оказывает помощь людям, оказавшимся в сложных жизненных ситуациях. Наша команда профессионалов готова предложить вам поддержку, консультации и решения.',
});

export default function AboutUs() {
  redirect('/');
}
