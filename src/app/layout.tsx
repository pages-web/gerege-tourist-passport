import { Inter as FontSans } from "next/font/google";
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
import Header from "@/components/header/page";
import DefaultLayout from "@/components/layouts";
import GeregeButton from "@/components/gerege-button/gerege-button";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  const { config } = await getConfig();
  const { pdomain, name, description, uiOptions } = config || {};

  return {
    metadataBase: new URL(pdomain || "https://www.erxes.io"),
    title: name,
    description,
    openGraph: {
      title: name,
      description,
      images: [
        {
          url: uiOptions?.logo,
          width: 800,
          height: 600,
          alt: name,
        },
      ],
      url: pdomain,
      type: "website",
    },
  };
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const { config } = await getConfig();
  const { uiOptions } = config || {};

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href={"/favicon.ico"} />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col",
          fontSans.variable
        )}
      >
        <Providers>
          <ConfigProvider config={config}>{children}</ConfigProvider>
          <CurrentOrder />
          <OrderCRUD />
        </Providers>
        <Toaster richColors closeButton />
        <SpeedInsights />
      </body>
    </html>
  );
}
