import { ContactUs } from '@/module';
import { getContactInfo, getLicenseInfo, getRequisites, getUiContent } from '@/lib/cms';
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
  const [contactInfo, requisites, uiContent, licenseInfo] = await Promise.all([
    getContactInfo(),
    getRequisites(),
    getUiContent(),
    getLicenseInfo(),
  ]);

  const mainPhone = contactInfo?.mainPhone ?? '';
  const secondPhone = contactInfo?.secondPhone ?? '';
  const mainEmail = contactInfo?.mainEmail ?? '';

  return (
    <main id="main-content">
      <Container>
        <RequisitesPage
          data={requisites}
          labels={{
            pageTitle: uiContent?.requisitesPageTitle ?? '',
            tableCaption: uiContent?.requisitesTableCaption ?? '',
            columnName: uiContent?.requisitesColumnNameLabel ?? '',
            columnValue: uiContent?.requisitesColumnValueLabel ?? '',
            ogrn: uiContent?.requisitesOgrnLabel ?? '',
            ogrnDatePrefix: uiContent?.requisitesOgrnDatePrefix ?? '',
            innKpp: uiContent?.requisitesInnKppLabel ?? '',
            registrationDate: uiContent?.requisitesRegistrationDateLabel ?? '',
            legalAddress: uiContent?.requisitesLegalAddressLabel ?? '',
            actualAddress: uiContent?.requisitesActualAddressLabel ?? '',
            head: uiContent?.requisitesHeadLabel ?? '',
            mainActivity: uiContent?.requisitesMainActivityLabel ?? '',
            taxAuthority: uiContent?.requisitesTaxAuthorityLabel ?? '',
            okpo: uiContent?.requisitesOkpoLabel ?? '',
            okato: uiContent?.requisitesOkatoLabel ?? '',
            oktmo: uiContent?.requisitesOktmoLabel ?? '',
            okfs: uiContent?.requisitesOkfsLabel ?? '',
            okogu: uiContent?.requisitesOkoguLabel ?? '',
            okopf: uiContent?.requisitesOkopfLabel ?? '',
          }}
        />
        <LicenseDisplay
          data={licenseInfo}
          imageAltPrefix={uiContent?.licenseImageAltPrefix ?? ''}
        />
      </Container>
      <ContactUs
        isMainPage={false}
        mainEmail={mainEmail}
        mainPhoneNumber={mainPhone}
        secondPhoneNumber={secondPhone}
        uiText={uiContent}
      />
    </main>
  );
}
