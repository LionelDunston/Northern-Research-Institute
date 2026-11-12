import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.northernresearchinstitute.org" }],
        destination: "https://northernresearchinstitute.org/:path*",
        permanent: true,
      },
      { source: "/student", destination: "/researcher", permanent: true },
      { source: "/student/:path*", destination: "/researcher/:path*", permanent: true },
      { source: "/author", destination: "/researcher", permanent: true },
      { source: "/author/:path*", destination: "/researcher/:path*", permanent: true },
      { source: "/innovation", destination: "/community-development", permanent: true },
      { source: "/research-programmes", destination: "/business-opportunities", permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
    ]
  },
};

export default nextConfig;
