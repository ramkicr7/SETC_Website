/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  experimental: {
    // Prevent stale dev-server chunk manifests after rapid file and dependency syncs.
    turbopackFileSystemCacheForDev: false,
  },
};

module.exports = nextConfig;
