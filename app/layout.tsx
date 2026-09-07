import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingButtons } from '@/components/layout/FloatingButtons';
import { PageTransition } from '@/components/layout/PageTransition';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.studentsdubai.com'),
  title: { default: 'SETC | Learn with purpose. Go everywhere.', template: '%s | SETC' },
  description: 'SETC is a connected education group helping learners build language skills, prepare for opportunity and move confidently through a global world.',
  keywords: ['SETC', 'Students Everywhere Training Center', 'English language training Dubai', 'exam preparation Dubai', 'language skills UAE'],
  openGraph: { title: 'SETC | Learn with purpose. Go everywhere.', description: 'A connected education group for language, learning and global opportunity.', type: 'website', siteName: 'SETC' },
  twitter: { card: 'summary_large_image', title: 'SETC | Learn with purpose. Go everywhere.', description: 'A connected education group for language, learning and global opportunity.' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={inter.variable}><body><Header /><PageTransition>{children}</PageTransition><Footer /><FloatingButtons /></body></html>;
}
