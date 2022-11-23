/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/authentication",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
