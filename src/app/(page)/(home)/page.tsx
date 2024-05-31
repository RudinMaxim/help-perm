import { services } from '@/constants/services';
import { ContactUs, Hero, OurServices } from './module';
import { HowWeWork } from './module/HowWeWork';
import { steps } from '@/constants/steps';
import { Container, MotivationalBanner } from '@/components';

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
        <HowWeWork title="Как мы работаем" steps={steps} />
        <MotivationalBanner />
        <OurServices title="Чем поможем" services={services} />
      </Container>
      <ContactUs title="Свяжитесь с нами" phone="+79223261682" />
    </main>
  );
}
