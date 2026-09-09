const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin("./i18n/request.js");

/**
 * Each festival edition gets its own year-stamped URL (see lib/festival.js),
 * so retiring an edition means the previous year's links — shared on socials,
 * printed on flyers, indexed by search engines — would otherwise 404. Keep a
 * redirect here for every past edition, newest destination first.
 *
 * These run ahead of the next-intl middleware, so both the locale-prefixed
 * path and the bare path need covering.
 */
const FESTIVAL_REDIRECTS = [
  { from: "asafotufiami-2026", to: "asafotufiami-2027" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return FESTIVAL_REDIRECTS.flatMap(({ from, to }) => [
      {
        source: `/festival/${from}`,
        destination: `/festival/${to}`,
        permanent: true,
      },
      {
        source: `/:locale(en|fr)/festival/${from}`,
        destination: `/:locale/festival/${to}`,
        permanent: true,
      },
    ]);
  },
};

module.exports = withNextIntl(nextConfig);
