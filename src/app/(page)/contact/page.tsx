import { getMetadata } from '@/utils/getMetadata';
import { Metadata } from 'next';
import { ContactUs } from '../(home)/module';

export const metadata: Metadata = getMetadata({
  title: 'Контакты - Бесплатная помощь зависимым по всей России',
  description: 'Свяжитесь с нами, чтобы получить поддержку в трудные времена',
});

export default function selfhelp() {
  return (
    <main>
      <ContactUs title="Свяжитесь с нами" phone="+79223261682" />
    </main>
  );
}
