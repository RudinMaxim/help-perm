import { MAIN_PHONE_NUMBER } from '@/constants/phone';
import { values } from '@/constants/values';
import { ContactUs } from "../(home)/module";
import { AboutHero, TeamSection } from "./module";
import { ValuesSection } from "./module/ValuesSection";

export default function selfhelp() {
  return (
    <main>
      <AboutHero
        title="Кто мы и чем занимаемся"
        subtitle="Наша миссия - поддержка в трудные времена"
        description="Мы - некоммерческая организация, созданная для оказания помощи людям, оказавшимся в сложных жизненных ситуациях. Наша команда профессионалов готова предложить вам поддержку, консультации и решения, чтобы вы смогли преодолеть трудности и вернуться к нормальной жизни."
        buttonText="Получить помощь"
      />
      <TeamSection title="Наша команда"
        description="Наша команда объединяет профессионалов различных направлений, призванных оказывать помощь тем, кто оказался в трудной жизненной ситуации. Мы состоим из опытных специалистов в области психологии, социальной работы, юриспруденции и смежных дисциплин. Объединив усилия, мы обеспечиваем комплексный подход к решению проблем каждого обратившегося, окружая его профессиональной поддержкой на всех этапах преодоления трудностей."
      />
      <ValuesSection
        title="Наши ценности"
        values={values}
      />
      <ContactUs title="Свяжитесь с нами" phone={MAIN_PHONE_NUMBER} />
    </main>
  );
}
