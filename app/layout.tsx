import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from 'next/script'

const poppins = Poppins({ 
  weight: ['400', '700'],
  subsets: ['latin']
 });

export const metadata: Metadata = {
  title: "Muhammad Firgan | Frontend Developer",
  description: "Frontend developer from Antarctic.px, focusing in Next js, React Js, Typescript, Tailwind CSS",
  other: {
    'og:type': 'website',
    'og:url': 'muhammadfirgan'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        
       
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-HNMHYG92T0"></Script>
        <Script id="google-analytics">
          {
            `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'G-HNMHYG92T0');
            `
          }
        </Script>

      </head>
      <link rel="icon" href="/img/favicon.ico" sizes="any" />
      <body className={`bg-zinc-900 ${poppins.className}`}>{children}</body>
    </html>
  );
}
