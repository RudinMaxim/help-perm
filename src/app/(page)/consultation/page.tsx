import { MAIN_EMAIL, MAIN_PHONE_NUMBER, SECOND_PHONE_NUMBER } from '@/constants/phone';
import { ContactUs } from '@/module';
import { getMetadata } from '@/utils/getMetadata';
import { Metadata } from 'next';

export const metadata: Metadata = getMetadata({
  title: 'Контакты - Бесплатная помощь зависимым по всей России',
  description: 'Свяжитесь с нами, чтобы получить поддержку в трудные времена',
});

export default function consultation() {
  return (
    <main>
      <ContactUs
        title="Контактная форма"
        phone={MAIN_PHONE_NUMBER}
        isMainPage={false}
        mainEmail={MAIN_EMAIL}
        mainPhoneNumber={MAIN_PHONE_NUMBER}
        secondPhoneNumber={SECOND_PHONE_NUMBER}
      />

    </main>
  );
}
