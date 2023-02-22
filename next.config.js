/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images : {
    domains: ["links.papareact.com"]
  },

  experimental: {
    optimizeFonts: true,
    appDir: "app",
  },
}
