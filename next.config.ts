import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  experimental: {
    // Enables app/global-not-found.tsx (localized 404 for every unknown URL).
    globalNotFound: true,
  },
  turbopack: {
    // Pin the workspace root to this folder (a stray lockfile higher up would
    // otherwise be picked as the root).
    root: process.cwd(),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
