import { Footer, Header } from '@/components';
import { getContactInfo, getUiContent } from '@/lib/cms';
import { PATH_URL } from '@/constants/path';
import { getMetadata, getOrganizationJsonLd } from '@/utils/getMetadata';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.scss';
import YandexMetrika from './YandexMetrika';

const poppins = Inter({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = getMetadata({
  title: 'Помощь рядом',
  description: 'Жизнь порой преподносит неожиданные испытания, и порой может показаться, что вы остались один на один со своими проблемами. Но это не так – мы, готовы оказать вам профессиональную помощь и поддержку. Независимо от того, какие трудности вы переживаете, мы поможем найти решение и пройти этот путь вместе с вами.',
});

declare global {
  interface Window {
    ym: (
      counterId: number,
      type: string,
      goal: string,
      params?: Record<string, any>
    ) => void;
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = getOrganizationJsonLd();
  const [contactInfo, ui] = await Promise.all([getContactInfo(), getUiContent()]);
  const navItems = [
    { url: PATH_URL.aboutus.url, name: ui?.navAboutUsLabel ?? '' },
    { url: PATH_URL.requisites.url, name: ui?.navRequisitesLabel ?? '' },
  ].filter((item) => item.name.trim().length > 0);

  return (
    <html lang="ru">
      <body className={poppins.className}>
        <a className="skip-link" href="#main-content">
          {ui?.skipLinkText ?? ''}
        </a>
        <Header
          mainPhone={contactInfo?.mainPhone ?? ''}
          mainEmail={contactInfo?.mainEmail ?? ''}
          logoText={ui?.logoText ?? ''}
          logoAriaLabel={ui?.logoAriaLabel ?? ''}
          logoAlt={ui?.logoAlt ?? ''}
          navAriaLabel={ui?.headerNavAriaLabel ?? ''}
          navItems={navItems}
          burgerOpenLabel={ui?.burgerMenuOpenLabel ?? ''}
          burgerCloseLabel={ui?.burgerMenuCloseLabel ?? ''}
          emailLinkTitle={ui?.headerEmailLinkTitle ?? ''}
          phoneLinkLabelPrefix={ui?.phoneLinkLabelPrefix ?? ''}
        />
        {children}
        <Footer
          copyrightText={ui?.footerCopyrightText ?? ''}
          privacyPolicyText={ui?.footerPrivacyPolicyText ?? ''}
          privacyPolicyUrl={PATH_URL.privacyPolicy.url}
        />
        <Toaster position="top-right" expand={false} richColors />
        <YandexMetrika />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
