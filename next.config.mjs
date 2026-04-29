/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
