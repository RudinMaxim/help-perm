import { MAIN_PHONE_NUMBER } from '@/constants/phone';
import { stories } from '@/constants/stories';
import { getMetadata } from '@/utils/getMetadata';
import { Metadata } from 'next';
import { ContactUs, Results } from "../(home)/module";

export const metadata: Metadata = getMetadata({
  title: 'Результаты - Бесплатная помощь зависимым по всей России',
  description:
    'Получите результаты, которые помогут вам выбрать правильный путь к решению проблем',
});


export default function selfhelp() {
  return (
    <main>
      <Results stories={stories} />
      <ContactUs title="Свяжитесь с нами" phone={MAIN_PHONE_NUMBER} />
    </main>
  );
}
