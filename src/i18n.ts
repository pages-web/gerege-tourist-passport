import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en-us", "kr"];
// const locales = ["en-us"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
