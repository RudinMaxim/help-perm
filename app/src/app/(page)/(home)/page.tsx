import { Container, MotivationalBanner } from '@/components';
import { ContactUs } from '@/module';
import {
  cmsMediaUrl,
  getContactInfo,
  getLicenseInfo,
  getServices,
  getSiteContent,
  getStories,
  getUiContent,
} from '@/lib/cms';
import { getMetadata } from '@/utils/getMetadata';
import { Metadata } from 'next/types';
import { Hero, OurServices, SocialGoal } from './module';
import { LicenseDisplay } from '../requisites/module/LicensesSection';
import { Results } from '../results/module';

export const metadata: Metadata = getMetadata({
  title: 'Бесплатная помощь зависимым в России',
  description:
    'Наша организация готова оказать профессиональную помощь и поддержку в решении различных жизненных проблем. Независимо от ситуации, мы поможем найти решение и пройти этот путь вместе с вами.',
});

export default async function Home() {
  const [contactInfo, services, siteContent, uiContent, licenseInfo, stories] = await Promise.all([
    getContactInfo(),
    getServices(),
    getSiteContent(),
    getUiContent(),
    getLicenseInfo(),
    getStories(),
  ]);

  const mainPhone = contactInfo?.mainPhone ?? '';
  const secondPhone = contactInfo?.secondPhone ?? '';
  const mainEmail = contactInfo?.mainEmail ?? '';
  const secondTelegramLink = contactInfo?.secondTelegramLink ?? '';
  const maxMessengerLink = contactInfo?.maxMessengerLink ?? '';
  const storyItems = stories
    .map((story) => ({
      id: story.id,
      description: story.description,
      imageUrl: cmsMediaUrl(story.image),
    }))
    .filter((story) => story.imageUrl);

  return (
    <main id="main-content">
      <Container>
        <Hero
          title={siteContent?.homeHeroTitle ?? ''}
          description={siteContent?.homeHeroDescription ?? ''}
          mainPhone={mainPhone}
          secondTelegramLink={secondTelegramLink}
          maxMessengerLink={maxMessengerLink}
          maxButtonText={uiContent?.homeHeroMaxButtonText ?? ''}
          telegramButtonText={uiContent?.homeHeroTelegramButtonText ?? ''}
          callButtonText={uiContent?.homeHeroCallButtonText ?? ''}
        />
        <SocialGoal
          title={siteContent?.socialGoalTitle ?? ''}
          text={siteContent?.socialGoalText ?? ''}
        />
        <OurServices
          title={uiContent?.homeServicesTitle ?? ''}
          services={services}
          footnote={uiContent?.homeServicesFootnote ?? ''}
          prevSlideMessage={uiContent?.sliderPrevSlideMessage ?? ''}
          nextSlideMessage={uiContent?.sliderNextSlideMessage ?? ''}
        />
        <Results
          stories={storyItems}
          title={uiContent?.resultsPageTitle ?? ''}
          storyAltPrefix={uiContent?.resultsStoryAltPrefix ?? ''}
        />
        <MotivationalBanner
          title={siteContent?.motivationalBannerTitle ?? ''}
          description={siteContent?.motivationalBannerDescription ?? ''}
          mainPhone={mainPhone}
          buttonText={uiContent?.homeMotivationalCallButtonText ?? ''}
        />
        <LicenseDisplay
          data={licenseInfo}
          imageAltPrefix={uiContent?.licenseImageAltPrefix ?? ''}
        />
      </Container>
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
