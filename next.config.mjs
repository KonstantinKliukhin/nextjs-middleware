import { fileURLToPath } from "node:url";
import createJiti from "jiti";

const jiti = createJiti(fileURLToPath(import.meta.url));
// Import env here to validate during build. Using jiti we can import .ts files :)
jiti("./src/shared/config/env");


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // change when you know your images hosts
      {
        protocol: "https",
        hostname: "*",
      },
      {
        protocol: "http",
        hostname: "*",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 425, 640, 768, 1024, 1440],
    minimumCacheTTL: 600, // 10 minutes,
  },
};

export default nextConfig;
