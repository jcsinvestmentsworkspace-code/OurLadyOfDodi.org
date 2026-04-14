import type { NextConfig } from "next";
import path from "node:path";

// Loader path from orchids-visual-edits
const loaderPath = require.resolve('orchids-visual-edits/loader.js');

const nextConfig: NextConfig = {
  output: "export", // enables static export
  images: {
    unoptimized: true, // ✅ important for static export
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
      { protocol: 'http', hostname: '**' },
    ],
  },
  outputFileTracingRoot: path.resolve(__dirname, '../../'),
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [loaderPath],
      },
    },
  },
};

export default nextConfig;