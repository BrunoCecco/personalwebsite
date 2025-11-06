/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static export
  images: {
    unoptimized: true, // Disable image optimization to match Vite behavior
  },
};

module.exports = nextConfig;

