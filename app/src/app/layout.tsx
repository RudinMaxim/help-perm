import { Footer, Header, SiteMotion } from '@/components';
import { getUiContent } from '@/lib/cms';
import { getMetadata, getOrganizationJsonLd } from '@/utils/getMetadata';
import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Sans, Source_Sans_3 } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.scss';
import YandexMetrika from './YandexMetrika';

const bodyFont = Source_Sans_3({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
});

const headingFont = IBM_Plex_Sans({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-heading',
  weight: ['500', '600', '700'],
});

export const metadata: Metadata = getMetadata({
  title: 'Помощь рядом',
  description: 'Жизнь порой преподносит неожиданные испытания, и порой может показаться, что вы остались один на один со своими проблемами. Но это не так – мы, готовы оказать вам профессиональную помощь и поддержку. Независимо от того, какие трудности вы переживаете, мы поможем найти решение и пройти этот путь вместе с вами.',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

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
  const ui = await getUiContent();

  return (
    <html lang="ru">
      <body className={`${bodyFont.variable} ${headingFont.variable}`}>
        <a className="skip-link" href="#main-content">
          {ui?.skipLinkText ?? ''}
        </a>
        <Header
          logoText={ui?.logoText ?? ''}
          logoAriaLabel={ui?.logoAriaLabel ?? ''}
          logoAlt={ui?.logoAlt ?? ''}
        />
        <SiteMotion />
        {children}
        <Footer
          copyrightText={ui?.footerCopyrightText ?? ''}
          privacyPolicyText={ui?.footerPrivacyPolicyText ?? ''}
          privacyPolicyUrl="/privacy-policy"
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
