/** @type {import('next').NextConfig} */
const nextConfig = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, out, distDir, buildId }
  ) {
    return {
      '/': { page: '/' }
    }
  },
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: '',
    domains: ['prowess.qodeinteractive.com', 'technext.github.io', 'localhost'],
  },
}

module.exports = nextConfig
