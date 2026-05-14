import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Hide dev-only bottom indicator (route / build overlay) in development */
  devIndicators: false,
};

export default nextConfig;
