import { Container, MotivationalBanner } from '@/components';
import { ContactUs } from '@/module';
import { getContactInfo, getServices, getSiteContent } from '@/lib/cms';
import { getMetadata } from '@/utils/getMetadata';
import { Metadata } from 'next/types';
import { Hero, OurServices, SocialGoal } from './module';
import { LicenseDisplay } from '../requisites/module/LicensesSection';

export const metadata: Metadata = getMetadata({
  title: 'Бесплатная помощь зависимым в России',
  description:
    'Наша организация готова оказать профессиональную помощь и поддержку в решении различных жизненных проблем. Независимо от ситуации, мы поможем найти решение и пройти этот путь вместе с вами.',
});

export default async function Home() {
  const [contactInfo, services, siteContent] = await Promise.all([
    getContactInfo(),
    getServices(),
    getSiteContent(),
  ]);

  const mainPhone = contactInfo?.mainPhone ?? '';
  const secondPhone = contactInfo?.secondPhone ?? '';
  const mainEmail = contactInfo?.mainEmail ?? '';
  const secondTelegramLink = contactInfo?.secondTelegramLink ?? '';
  const maxMessengerLink = contactInfo?.maxMessengerLink ?? '';

  return (
    <main id="main-content">
      <Container>
        <Hero
          title={siteContent?.homeHeroTitle ?? 'Бесплатная помощь зависимым по всей России'}
          description={siteContent?.homeHeroDescription ?? ''}
          mainPhone={mainPhone}
          secondTelegramLink={secondTelegramLink}
          maxMessengerLink={maxMessengerLink}
        />
        <SocialGoal
          title={siteContent?.socialGoalTitle ?? 'Наша цель'}
          text={siteContent?.socialGoalText ?? ''}
        />
        <OurServices
          title="Наши услуги"
          services={services}
        />
        <MotivationalBanner
          title={siteContent?.motivationalBannerTitle ?? 'Не откладывай помощь на потом – свяжись с нами прямо сейчас!'}
          description={siteContent?.motivationalBannerDescription ?? ''}
          mainPhone={mainPhone}
        />
        <LicenseDisplay />
      </Container>
      <ContactUs
        isMainPage={false}
        mainEmail={mainEmail}
        mainPhoneNumber={mainPhone}
        secondPhoneNumber={secondPhone}
      />
    </main>
  );
}
