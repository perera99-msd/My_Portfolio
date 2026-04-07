import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';

import AnimationProvider from '../components/AnimationProvider';
import BackgroundSystem from '../components/BackgroundSystem';
import FloatingNav from '../components/FloatingNav';
import Footer from '../components/Footer';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700', '800'],
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Dimalsha Perera | Developer',
  description: 'A premium, interactive portfolio with glassmorphism, 3D accents, and fast Next.js routing.',
  icons: {
    icon: '/browser/browserimage.png',
    shortcut: '/browser/browserimage.png',
    apple: '/browser/browserimage.png',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${manrope.variable} ${cormorant.variable}`}>
      <body className="antialiased selection:bg-white selection:text-black">
        <BackgroundSystem />
        <AnimationProvider />
        <FloatingNav />

        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}