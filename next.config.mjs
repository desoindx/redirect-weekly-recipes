/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: ':slug*',
        destination: 'https://weekly-recipes.vercel.app/:slug*',
        permanent: true,
      }
    ]
  }
};

export default nextConfig;
