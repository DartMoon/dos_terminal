/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/terminal',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
