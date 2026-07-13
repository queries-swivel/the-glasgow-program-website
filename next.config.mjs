/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  async redirects() {
    return [
      // Services hub removed; ECG Core Lab is the primary service landing.
      { source: "/services", destination: "/services/core-lab", permanent: true },
      // Clinical Trials merged into the ECG Core Lab page.
      {
        source: "/services/clinical-trials",
        destination: "/services/core-lab",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
