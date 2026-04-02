import { Container } from '@/components';
import { ContactUs } from '@/module';
import {
  cmsMediaUrl,
  getContactInfo,
  getServices,
  getSiteContent,
  getSteps,
  getStories,
  getUiContent,
  getValues,
} from '@/lib/cms';
import { getMetadata } from '@/utils/getMetadata';
import { Metadata } from 'next/types';
import styles from './Home.module.scss';
import { Hero, OurServices, SocialChannels, SocialGoal } from './module';
import { Results } from '../results/module';

export const metadata: Metadata = getMetadata({
  title: 'Бесплатная помощь зависимым в России',
  description:
    'Наша организация готова оказать профессиональную помощь и поддержку в решении различных жизненных проблем. Независимо от ситуации, мы поможем найти решение и пройти этот путь вместе с вами.',
});

export default async function Home() {
  const [contactInfo, services, siteContent, uiContent, stories, steps, values] = await Promise.all([
    getContactInfo(),
    getServices(),
    getSiteContent(),
    getUiContent(),
    getStories(),
    getSteps(),
    getValues(),
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
    <main id="main-content" className={styles.homeMain}>
      <Container className={styles.pageShell}>
        <Hero
          title={siteContent?.homeHeroTitle ?? ''}
          description={siteContent?.homeHeroDescription ?? ''}
          steps={steps}
          howWeWorkTitle={uiContent?.aboutHowWeWorkTitle ?? ''}
        />
        <SocialChannels
          mainPhone={mainPhone}
          maxMessengerLink={maxMessengerLink}
          secondTelegramLink={secondTelegramLink}
          maxButtonText={uiContent?.homeHeroMaxButtonText ?? ''}
          telegramButtonText={uiContent?.homeHeroTelegramButtonText ?? ''}
        />
        <SocialGoal
          eyebrow={siteContent?.aboutHeroSubtitle ?? ''}
          title={siteContent?.aboutHeroTitle ?? ''}
          description={siteContent?.aboutHeroDescription ?? ''}
          missionTitle={siteContent?.socialGoalTitle ?? ''}
          missionText={siteContent?.socialGoalText ?? ''}
          teamTitle={siteContent?.teamTitle ?? ''}
          teamDescription={siteContent?.teamDescription ?? ''}
        />
        <OurServices
          title={uiContent?.homeServicesTitle ?? ''}
          services={services}
          footnote={uiContent?.homeServicesFootnote ?? ''}
        />
        <Results
          stories={storyItems}
          title={uiContent?.resultsPageTitle ?? ''}
          storyAltPrefix={uiContent?.resultsStoryAltPrefix ?? ''}
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
