import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google'
import { Providers } from "./providers";
import Navbar from "./navbar";

const montserrat = Montserrat({
  weight: ['400', '600', '800'],
  subsets: ['latin'],
  fallback: ['Arial', 'sans-serif'],
})

export const metadata: Metadata = {
  title: "Catopedia",
  description: "A cat encyclopedia app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        <Providers>
          <main className="bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText">
            <Navbar />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
