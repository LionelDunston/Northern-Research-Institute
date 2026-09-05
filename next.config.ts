import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  async redirects() {
    return [
      { source: "/student", destination: "/researcher", permanent: true },
      { source: "/student/:path*", destination: "/researcher/:path*", permanent: true },
      { source: "/author", destination: "/researcher", permanent: true },
      { source: "/author/:path*", destination: "/researcher/:path*", permanent: true },
    ]
  },
};

export default nextConfig;
