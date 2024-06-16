import { Container, MotivationalBanner } from '@/components';
import { services } from '@/constants/services';
import { steps } from '@/constants/steps';
import { stories } from '@/constants/stories';
import { getMetadata } from '@/utils/getMetadata';
import { Metadata } from 'next/types';
import { ContactUs, Hero, OurServices, Results } from './module';
import { HowWeWork } from './module/HowWeWork';

export const metadata: Metadata = getMetadata({
  title: 'Помощь рядом - Поддержка и решение жизненных проблем',
  description: 'Наша организация готова оказать профессиональную помощь и поддержку в решении различных жизненных проблем. Независимо от ситуации, мы поможем найти решение и пройти этот путь вместе с вами.',
});

export default function Home() {

  return (
    <main>
      <Container>
        <Hero
          title="Помощь всегда рядом"
          subtitle="Мы здесь, чтобы поддержать вас в трудные моменты жизни"
          description="Жизнь порой преподносит неожиданные испытания, и порой может показаться, что вы остались один на один со своими проблемами. Но это не так – мы, готовы оказать вам профессиональную помощь и поддержку. Независимо от того, какие трудности вы переживаете, мы поможем найти решение и пройти этот путь вместе с вами."
          buttonText="Получить помощь"
        />
        <OurServices title="Чем поможем" services={services} />
        <MotivationalBanner />
        <HowWeWork title="Как мы работаем" steps={steps} />
        <Results stories={stories} />
      </Container>
      <ContactUs title="Свяжитесь с нами" phone="+79223261682" />
    </main>
  );
}
