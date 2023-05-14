/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
     remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.themoviedb.org',
        port: '',
        pathname: '/t/p/w220_and_h330_face/**',
      },
    ],
  },
};

module.exports = nextConfig;
