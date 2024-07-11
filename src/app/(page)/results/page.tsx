import { MAIN_EMAIL, MAIN_PHONE_NUMBER, SECOND_PHONE_NUMBER } from '@/constants/phone';
import { stories } from '@/constants/stories';
import { ContactUs } from '@/module';
import { getMetadata } from '@/utils/getMetadata';
import { Metadata } from 'next';
import { Results } from './module';

export const metadata: Metadata = getMetadata({
  title: 'Результаты - Бесплатная помощь зависимым по всей России',
  description:
    'Получите результаты, которые помогут вам выбрать правильный путь к решению проблем',
});


export default function results() {
  return (
    <main>
      <Results stories={stories} />
      <ContactUs
        title="Контактная форма"
        phone={MAIN_PHONE_NUMBER}
        isMainPage={true}
        mainEmail={MAIN_EMAIL}
        mainPhoneNumber={MAIN_PHONE_NUMBER}
        secondPhoneNumber={SECOND_PHONE_NUMBER}
      />

    </main>
  );
}
