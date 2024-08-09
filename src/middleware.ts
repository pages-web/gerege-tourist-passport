import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en-us", "kr"],
  defaultLocale: "en-us",
});

export const config = {
  matcher: ["/", "/(en-us|kr)/:path*"],
};
