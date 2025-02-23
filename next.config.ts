/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // Google-hosted images (Drive indirect links)
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com", // iStock photos
      },
      {
        protocol: "https",
        hostname: "*.google.com", // Covers various Google subdomains
      },
    ],
  },
};

module.exports = nextConfig;
