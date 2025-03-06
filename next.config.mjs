/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: false,
  },
  webpack(config) {
    return config;
  },
};

export default nextConfig;
