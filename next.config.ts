import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'images.prismic.io',
      'img.youtube.com',
      'images.unsplash.com'
    ],
  },
};

export default nextConfig;
