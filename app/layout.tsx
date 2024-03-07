import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  weight: ['400', '700'],
  subsets: ['latin']
 });

export const metadata: Metadata = {
  title: "Muhammad Firgan | Frontend Developer",
  description: "Frontend developer from Antarctic.px, focusing in Next js, React Js, Typescript, Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
