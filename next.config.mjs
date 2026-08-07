import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "tayseer.me" },
      { protocol: "https", hostname: "www.tayseer.me" }
    ]
  },
  webpack(config) {
    config.resolve.alias["react-router-dom"] = path.resolve(__dirname, "src/next-router-compat.jsx");
    return config;
  }
};

export default nextConfig;
