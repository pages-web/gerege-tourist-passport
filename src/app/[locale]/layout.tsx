import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Ensure this file exists and contains global styles
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Providers } from "@/provider/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gerege Tourist Passport",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
