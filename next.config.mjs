/** @type {import('next').NextConfig} */
const nextConfig = {
  generateBuildId: () => new Date().getTime().toString(),
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
