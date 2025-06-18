import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

// next.config.js
module.exports = {
  webpack(config: { externals: { 'pg-native': string; }[]; }) {
    config.externals.push({
      'pg-native': 'commonjs pg-native',
    })
    return config
  },
}

export default nextConfig;
