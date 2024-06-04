import { teamMembers } from "@/constants/teamMembers";
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
        description="Познакомьтесь с людьми, которые стоят за нашей организацией и помогают тем, кто нуждается в поддержке."
        members={teamMembers} />
      <ValuesSection
        title="Наши ценности"
        values={values}
      />
      <ContactUs title="Свяжитесь с нами" phone="+79223261682" />
    </main>
  );
}
