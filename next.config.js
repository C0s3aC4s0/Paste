/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  basePath: '/Paste', // Replace with your repository name
  images: {
    unoptimized: true
  },
  trailingSlash: true,
} 