import { ContactUs } from '@/module';
import { getContactInfo, getStories, cmsMediaUrl } from '@/lib/cms';
import { getMetadata } from '@/utils/getMetadata';
import { Metadata } from 'next';
import { Results } from './module';

export const metadata: Metadata = getMetadata({
  title: 'Результаты - Бесплатная помощь зависимым по всей России',
  description: 'Получите результаты, которые помогут вам выбрать правильный путь к решению проблем',
});

export default async function ResultsPage() {
  const [contactInfo, stories] = await Promise.all([
    getContactInfo(),
    getStories(),
  ]);

  const storyItems = stories.map((s) => ({
    id: s.id,
    description: s.description,
    imageUrl: cmsMediaUrl(s.image),
  }));

  const mainPhone = contactInfo?.mainPhone ?? '';
  const secondPhone = contactInfo?.secondPhone ?? '';
  const mainEmail = contactInfo?.mainEmail ?? '';

  return (
    <main id="main-content">
      <Results stories={storyItems} />
      <ContactUs
        isMainPage={false}
        mainEmail={mainEmail}
        mainPhoneNumber={mainPhone}
        secondPhoneNumber={secondPhone}
      />
    </main>
  );
}
