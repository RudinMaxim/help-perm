import { Container, MotivationalBanner } from '@/components';
import { services } from '@/constants/services';
import { ContactUs } from '@/module';
import { getMetadata } from '@/utils/getMetadata';
import { Metadata } from 'next/types';
import { Hero, OurServices } from './module';

export const metadata: Metadata = getMetadata({
  title: 'Бесплатная помощь зависимым в России',
  description: 'Наша организация готова оказать профессиональную помощь и поддержку в решении различных жизненных проблем. Независимо от ситуации, мы поможем найти решение и пройти этот путь вместе с вами.',
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
        <OurServices title="Чем поможем?" services={services} />
        <MotivationalBanner />
        
      </Container>
      <ContactUs title="Свяжитесь с нами" phone="+79223261682" />
    </main>
  );
}
