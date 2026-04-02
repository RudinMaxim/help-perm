import { ContactUs } from '@/module';
import { getContactInfo, getSiteContent, getSteps, getUiContent, getValues } from '@/lib/cms';
import { getMetadata } from '@/utils/getMetadata';
import { Metadata } from 'next';
import { AboutHero, HowWeWork, TeamSection, ValuesSection } from './module';

export const metadata: Metadata = getMetadata({
  title: 'О нас - Бесплатная помощь зависимым по всей России',
  description: 'Узнайте больше о нашей некоммерческой организации, которая оказывает помощь людям, оказавшимся в сложных жизненных ситуациях. Наша команда профессионалов готова предложить вам поддержку, консультации и решения.',
});

export default async function AboutUs() {
  const [contactInfo, siteContent, steps, values, uiContent] = await Promise.all([
    getContactInfo(),
    getSiteContent(),
    getSteps(),
    getValues(),
    getUiContent(),
  ]);

  const mainPhone = contactInfo?.mainPhone ?? '';
  const secondPhone = contactInfo?.secondPhone ?? '';
  const mainEmail = contactInfo?.mainEmail ?? '';

  return (
    <main id="main-content">
      <AboutHero
        title={siteContent?.aboutHeroTitle ?? ''}
        subtitle={siteContent?.aboutHeroSubtitle ?? ''}
        description={siteContent?.aboutHeroDescription ?? ''}
        buttonText={siteContent?.aboutHeroButtonText ?? ''}
      />
      <HowWeWork title={uiContent?.aboutHowWeWorkTitle ?? ''} steps={steps} />
      <TeamSection
        title={siteContent?.teamTitle ?? ''}
        description={siteContent?.teamDescription ?? ''}
      />
      <ValuesSection
        title={uiContent?.aboutValuesTitle ?? ''}
        values={values}
      />
      <ContactUs
        isMainPage={false}
        mainEmail={mainEmail}
        mainPhoneNumber={mainPhone}
        secondPhoneNumber={secondPhone}
        uiText={uiContent}
      />
    </main>
  );
}
