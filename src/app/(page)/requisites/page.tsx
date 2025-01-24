import {
  MAIN_PHONE_NUMBER,
  MAIN_EMAIL,
  SECOND_PHONE_NUMBER,
} from '@/constants/phone';
import { ContactUs } from '@/module';
import { getMetadata } from '@/utils/getMetadata';
import { Metadata } from 'next';
import { RequisitesPage } from './module';
import { Container } from '@/components';
import { LicenseDisplay } from './module/LicensesSection';

export const metadata: Metadata = getMetadata({
  title: 'Реквизиты - Бесплатная помощь зависимым по всей России',
  description:
    'Узнайте больше о нашей некоммерческой организации, которая оказывает помощь людям, оказавшимся в сложных жизненных ситуациях. Наша команда профессионалов готова предложить вам поддержку, консультации и решения.',
});

export default function requisites() {
  return (
    <main>
      <Container>
        <RequisitesPage />
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
