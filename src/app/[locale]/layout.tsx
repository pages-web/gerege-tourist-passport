import { Inter as FontSans, Monda } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cn, getSimilarColorWithOpacity, hexToHsl } from "@/lib/utils";
import Providers from "@/store";
import CurrentOrder from "@/containers/currentOrder";
import { Toaster } from "@/components/ui/sonner";
import OrderCRUD from "@/containers/order-cud";
import { getConfig } from "@/sdk/queries/auth";
import ConfigProvider from "@/components/layouts/config";
import { Metadata } from "next/types";
import Header from "@/components/header/header";
import DefaultLayout from "@/components/layouts";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Chat from "@/components/chatBot";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Gerege Tourist Passport",
    description:
      "The Gerege Tourist Passport is a modern travel document and travel log inspired by the Gerege, a diplomatic pass used during the Mongol Empire.",
    openGraph: {
      title: "Gerege Tourist Passport",
      description:
        "The Gerege Tourist Passport is a modern travel document and travel log inspired by the Gerege, a diplomatic pass used during the Mongol Empire.",
      images: [
        {
          url: "/image/pictures/cover_2.jpg", // Adjust the path if necessary
          width: 800,
          height: 600,
          alt: "Gerege Tourist Passport",
        },
      ],
      type: "website",
      siteName: "Gerege Tourist Passport", // Include site name for consistency
    },
    twitter: {
      card: "summary_large_image", // Twitter card type
      title: "Gerege Tourist Passport",
      description:
        "The Gerege Tourist Passport is a modern travel document and travel log inspired by the Gerege, a diplomatic pass used during the Mongol Empire.",
      images: "/image/pictures/cover_2.jpg", // Twitter-specific image path
    },
  };
}

const monda = Monda({
  subsets: ["latin"],
  weight: ["400", "700"], // Monda supports 400 and 700
  display: "swap",
});

export default async function RootLayout({ children }: RootLayoutProps) {
  const messages = await getMessages();
  const { config } = await getConfig();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Monda:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body
        className={cn(
          "min-h-screen bg-background antialiased flex flex-col",
          monda.className
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <ConfigProvider config={config}>
              <DefaultLayout>{children}</DefaultLayout>
            </ConfigProvider>
            <CurrentOrder />
            <OrderCRUD />
          </Providers>
          <Chat />
          <Toaster richColors closeButton />
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
