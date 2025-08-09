/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  // PDF serving configuration
  async headers() {
    return [
      {
        source: '/pdfs/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/pdf',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
