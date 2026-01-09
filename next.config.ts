import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
  // Ensure trailing slashes are handled consistently
  trailingSlash: true,
  // Skip trailing slash redirect for static export
  skipTrailingSlashRedirect: false,
};

export default nextConfig;
