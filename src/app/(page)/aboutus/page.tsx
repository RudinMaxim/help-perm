import { MAIN_EMAIL, MAIN_PHONE_NUMBER, SECOND_PHONE_NUMBER } from '@/constants/phone';
import { steps } from '@/constants/steps';
import { values } from '@/constants/values';
import { ContactUs } from '@/module';
import { getMetadata } from '@/utils/getMetadata';
import { Metadata } from 'next';
import { AboutHero, HowWeWork, TeamSection, ValuesSection } from "./module";

export const metadata: Metadata = getMetadata({
  title: 'О нас - Бесплатная помощь зависимым по всей России',
  description: 'Узнайте больше о нашей некоммерческой организации, которая оказывает помощь людям, оказавшимся в сложных жизненных ситуациях. Наша команда профессионалов готова предложить вам поддержку, консультации и решения.',
});


export default function selfhelp() {
  return (
    <main>
      <AboutHero
        title="Кто мы и чем занимаемся"
        subtitle="Наша миссия - поддержка в трудные времена"
        description="Мы - некоммерческая организация, созданная для оказания помощи людям, оказавшимся в сложных жизненных ситуациях. Наша команда профессионалов готова предложить вам поддержку, консультации и решения, чтобы вы смогли преодолеть трудности и вернуться к нормальной жизни."
        buttonText="Получить помощь"
      />
      <HowWeWork title="Как мы работаем?" steps={steps} />
      <TeamSection title="Наша команда"
        description="Наша команда объединяет профессионалов различных направлений, призванных оказывать помощь тем, кто оказался в трудной жизненной ситуации. Мы состоим из опытных специалистов в области психологии, социальной работы, юриспруденции и смежных дисциплин. Объединив усилия, мы обеспечиваем комплексный подход к решению проблем каждого обратившегося, окружая его профессиональной поддержкой на всех этапах преодоления трудностей."
      />
      <ValuesSection
        title="Наши ценности"
        values={values}
      />
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
