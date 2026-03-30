import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnimationProvider from '../components/AnimationProvider';
import Script from 'next/script';

export const metadata = {
  title: 'Dimalsha Perera | Software Engineer',
  description: 'Premium Obsidian Glass Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Logo.jpg" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        {/* Global DOM Animations */}
        <AnimationProvider />
        
        {children}

        {/* Required Scripts for Interactions */}
        <Script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" 
          strategy="lazyOnload" 
        />
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.1/vanilla-tilt.min.js" 
          strategy="lazyOnload" 
        />
      </body>
    </html>
  );
}