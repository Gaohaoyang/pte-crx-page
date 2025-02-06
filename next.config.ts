import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: { unoptimized: true },
  assetPrefix: isProd ? '/pte-crx-page/' : '',
  basePath: isProd ? '/pte-crx-page' : '',
};

export default nextConfig
