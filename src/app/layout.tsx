import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google'
import { Providers } from "./providers";
import Navbar from "./navbar";
import AppProviders from "./context/AppProviders";

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
          <AppProviders>
            <main className="bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText">
              <Navbar />
              <div className="md:ml-20 xl:ml-60 flex justify-center">
                {children}
              </div>
            </main>
          </AppProviders>
        </Providers>
      </body>
    </html>
  );
}
