const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_MAIN_API_DOMAIN: "https://geregepassport.api.erxes.io/gateway",
    NEXT_PUBLIC_WS_DOMAIN: "wss://geregepassport.api.erxes.io/gateway/graphql",
    NEXT_PUBLIC_POS_TOKEN: "3eEedApxQtfMxfcvE49PN278ENQGOFes",
    NEXT_PUBLIC_CP_ID: "DV2dK7Fc_MFCFLxzW20Wa",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.cloudfront.net",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "**.erxes.io",
      },
      {
        protocol: "https",
        hostname: "erxes.io",
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
