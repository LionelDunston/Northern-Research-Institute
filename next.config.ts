import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  async redirects() {
    return [
      { source: "/student", destination: "/author", permanent: true },
      { source: "/student/:path*", destination: "/author/:path*", permanent: true },
    ]
  },
};

export default nextConfig;
