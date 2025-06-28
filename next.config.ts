import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimización de imágenes para Vercel
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  
  // Optimización de performance
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  
  // Configuración de compresión
  compress: true,
  
  // Configuración de headers para SEO y seguridad
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // Configuración de redirecciones si es necesario
  async redirects() {
    return [];
  },
  
  // Configuración de rewrites si es necesario
  async rewrites() {
    return [];
  },
};

export default nextConfig;
