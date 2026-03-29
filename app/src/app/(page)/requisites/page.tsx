import { ContactUs } from '@/module';
import { getContactInfo, getRequisites } from '@/lib/cms';
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

export default async function Requisites() {
  const [contactInfo, requisites] = await Promise.all([
    getContactInfo(),
    getRequisites(),
  ]);

  const mainPhone = contactInfo?.mainPhone ?? '';
  const secondPhone = contactInfo?.secondPhone ?? '';
  const mainEmail = contactInfo?.mainEmail ?? '';

  return (
    <main id="main-content">
      <Container>
        <RequisitesPage data={requisites} />
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
