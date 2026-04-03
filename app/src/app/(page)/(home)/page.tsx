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
} from '@/lib/cms';
import { getMetadata } from '@/utils/getMetadata';
import { Metadata } from 'next/types';
import styles from './Home.module.scss';
import { Hero, OurServices, SocialChannels, SocialGoal } from './module';
import { Results } from '../results/module';

export async function generateMetadata(): Promise<Metadata> {
  const siteContent = await getSiteContent();

  return getMetadata({
    title: siteContent?.homeHeroTitle ?? 'Бесплатная помощь зависимым в России',
    description:
      siteContent?.homeHeroDescription ??
      'Наша организация готова оказать профессиональную помощь и поддержку в решении различных жизненных проблем. Независимо от ситуации, мы поможем найти решение и пройти этот путь вместе с вами.',
  });
}

export default async function Home() {
  const [contactInfo, services, siteContent, uiContent, stories, steps] = await Promise.all([
    getContactInfo(),
    getServices(),
    getSiteContent(),
    getUiContent(),
    getStories(),
    getSteps(),
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
          eyebrow={uiContent?.homeHeroEyebrow ?? 'Бесплатная и конфиденциальная поддержка'}
          title={siteContent?.homeHeroTitle ?? ''}
          description={siteContent?.homeHeroDescription ?? ''}
          imageUrl={cmsMediaUrl(siteContent?.homeHeroImage ?? null)}
          steps={steps}
          howWeWorkTitle={uiContent?.aboutHowWeWorkTitle ?? 'Как мы работаем'}
        />
        <SocialChannels
          eyebrow={uiContent?.homeSocialChannelsEyebrow ?? 'На связи'}
          title={uiContent?.homeSocialChannelsTitle ?? 'Выберите удобный способ связаться с нами'}
          mainPhone={mainPhone}
          callButtonText={uiContent?.homeHeroCallButtonText ?? 'Позвонить'}
          callButtonDescription={uiContent?.homeHeroCallButtonDescription ?? 'Связь сразу по телефону'}
          formButtonText={uiContent?.homeHeroFormButtonText ?? 'Оставить заявку'}
          formButtonDescription={uiContent?.homeHeroFormButtonDescription ?? 'Заполнить короткую форму'}
          maxMessengerLink={maxMessengerLink}
          secondTelegramLink={secondTelegramLink}
          maxButtonText={uiContent?.homeHeroMaxButtonText ?? 'Max'}
          maxButtonDescription={uiContent?.homeHeroMaxButtonDescription ?? 'Быстрый ответ в Max'}
          telegramButtonText={uiContent?.homeHeroTelegramButtonText ?? 'Telegram'}
          telegramButtonDescription={uiContent?.homeHeroTelegramButtonDescription ?? 'Написать в Telegram'}
        />
        <SocialGoal
          eyebrow={siteContent?.aboutHeroSubtitle ?? ''}
          title={siteContent?.aboutHeroTitle ?? ''}
          description={siteContent?.aboutHeroDescription ?? ''}
          missionKicker={uiContent?.homeAboutMissionKicker ?? 'О нас'}
          missionTitle={siteContent?.socialGoalTitle ?? ''}
          missionText={siteContent?.socialGoalText ?? ''}
          teamKicker={uiContent?.homeAboutTeamKicker ?? 'Команда'}
          teamTitle={siteContent?.teamTitle ?? ''}
          teamDescription={siteContent?.teamDescription ?? ''}
        />
        <OurServices
          eyebrow={uiContent?.homeServicesEyebrow ?? 'Направления помощи'}
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
