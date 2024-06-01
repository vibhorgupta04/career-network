/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com', 'encrypted-tbn0.gstatic.com', 'prod-file-upload-store.s3.amazonaws.com', 'lookaside.fbsbx.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:users*',
        destination: 'http://localhost:3000/:path*',
      },
    ]
  },
};

export default nextConfig;