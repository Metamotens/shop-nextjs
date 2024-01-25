import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "meta/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MetaStore",
  description: "Store made for practice with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-w-screen w-full min-h-screen flex-col mt-10`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
