import { Container, MotivationalBanner } from '@/components';
import {
  MAIN_EMAIL,
  MAIN_PHONE_NUMBER,
  SECOND_PHONE_NUMBER,
} from '@/constants/phone';
import { services } from '@/constants/services';
import { ContactUs } from '@/module';
import { getMetadata } from '@/utils/getMetadata';
import { Metadata } from 'next/types';
import { Hero, OurServices, SocialGoal } from './module';
import { LicenseDisplay } from '../requisites/module/LicensesSection';

export const metadata: Metadata = getMetadata({
  title: 'Бесплатная помощь зависимым в России',
  description:
    'Наша организация готова оказать профессиональную помощь и поддержку в решении различных жизненных проблем. Независимо от ситуации, мы поможем найти решение и пройти этот путь вместе с вами.',
});

export default function Home() {
  return (
    <main>
      <Container>
        <Hero
          title="Бесплатная помощь зависимым по всей России"
          subtitle=""
          description="Независимо от того, какие трудности вы переживаете, мы поможем найти решение и пройти этот путь вместе с вами. Обратившись к нам сегодня,уже спустя месяц Ваш близкий человек может стать свободным от зависимости."
          buttonText="Получить помощь"
        />
        <SocialGoal/>
        {/* <OurServices title="Чем поможем?" services={services} /> */}
        <MotivationalBanner />
        <LicenseDisplay/>
      </Container>
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
