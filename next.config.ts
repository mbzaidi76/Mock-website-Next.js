import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable typed routes to avoid incorrect references to app/page.js in generated types
  typedRoutes: false,
};

export default nextConfig;
