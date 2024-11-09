import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider, 
} from "@clerk/nextjs";

import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/global/Container";

import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soft & Sweet Home",
  description: "Soft & Sweet Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💟</text></svg>"></link>
        <body className={inter.className}>
          <Providers>
            <Navbar />
            <Container className='py-20'>
              {children}
            </Container>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
