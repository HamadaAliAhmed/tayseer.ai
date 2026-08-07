/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  pageExtensions: ["ts", "tsx"],
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "tayseer.me" },
      { protocol: "https", hostname: "www.tayseer.me" },
      { protocol: "https", hostname: "static.prod-images.emergentagent.com" }
    ]
  }
};

export default nextConfig;
