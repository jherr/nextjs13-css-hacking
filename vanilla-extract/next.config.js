/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    swcPlugins: [[require.resolve("swc-plugin-vanilla-extract"), {}]],
  },
};

module.exports = nextConfig;
