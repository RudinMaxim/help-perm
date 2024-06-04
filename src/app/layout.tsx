import { Footer, Header } from '@/components';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Помощь рядом',
  description: 'Жизнь порой преподносит неожиданные испытания, и порой может показаться, что вы остались один на один со своими проблемами. Но это не так – мы, готовы оказать вам профессиональную помощь и поддержку. Независимо от того, какие трудности вы переживаете, мы поможем найти решение и пройти этот путь вместе с вами.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        {children}

        <Footer />
      </body>
    </html>
  );
}
