import { ContactUs } from '@/module';
import { getContactInfo } from '@/lib/cms';
import { getMetadata } from '@/utils/getMetadata';
import { Metadata } from 'next';

export const metadata: Metadata = getMetadata({
  title: 'Контакты - Бесплатная помощь зависимым по всей России',
  description: 'Свяжитесь с нами, чтобы получить поддержку в трудные времена',
});

export default async function Consultation() {
  const contactInfo = await getContactInfo();

  return (
    <main id="main-content">
      <ContactUs
        isMainPage={false}
        mainEmail={contactInfo?.mainEmail ?? ''}
        mainPhoneNumber={contactInfo?.mainPhone ?? ''}
        secondPhoneNumber={contactInfo?.secondPhone ?? ''}
      />
    </main>
  );
}
