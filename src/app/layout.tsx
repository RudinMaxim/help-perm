import { Footer, Header } from '@/components';
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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = getOrganizationJsonLd();
  return (
    <html lang="ru">
      <body className={poppins.className}>
        <a className="skip-link" href="#main-content">
          Перейти к содержимому
        </a>
        <Header />
        {children}
        <Footer />
        {/* <CookieConsent
          onAccept={handleAcceptCookies}
          onDecline={handleDeclineCookies}
        /> */}
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
