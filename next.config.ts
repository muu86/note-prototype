import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["three"],

  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.glsl$/,
      exclude: /node_modules/,
      type: "asset/source",
    })
    return config
  },
}

export default nextConfig
