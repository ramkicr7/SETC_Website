import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SiteShell } from '@/components/layout/SiteShell';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.studentsdubai.com'),
  title: {
    default: 'Students Everywhere Training Center | Language, Test Preparation & Study Abroad in Dubai',
    template: '%s | Students Everywhere Training Center',
  },
  description: 'Students Everywhere Training Center is a Dubai-based education ecosystem connecting specialised brands in language training, test preparation and international study opportunities.',
  keywords: ['English training Dubai', 'IELTS preparation Dubai', 'PTE training Dubai', 'OET preparation', 'language training UAE', 'Spoken English Dubai'],
  openGraph: {
    title: 'Students Everywhere Training Center',
    description: 'Learn. Grow. Go Everywhere. English language and exam preparation in Dubai.',
    type: 'website',
    siteName: 'Students Everywhere Training Center',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Students Everywhere Training Center',
    description: 'Learn. Grow. Go Everywhere.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
