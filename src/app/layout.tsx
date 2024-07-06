import { Footer, Header } from '@/components';
import { getMetadata } from '@/utils/getMetadata';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import YandexMetrika from './YandexMetrika';

const poppins = Inter({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = getMetadata({
  title: 'Помощь рядом',
  description: 'Жизнь порой преподносит неожиданные испытания, и порой может показаться, что вы остались один на один со своими проблемами. Но это не так – мы, готовы оказать вам профессиональную помощь и поддержку. Независимо от того, какие трудности вы переживаете, мы поможем найти решение и пройти этот путь вместе с вами.',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const handleAcceptCookies = () => {
    console.log('Cookies accepted');
  };

  const handleDeclineCookies = () => {
    console.log('Cookies declined');
  };

  return (
    <html lang="ru">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
        {/* <CookieConsent
          onAccept={handleAcceptCookies}
          onDecline={handleDeclineCookies}
        /> */}
        <YandexMetrika />
      </body>
    </html>
  );
}
