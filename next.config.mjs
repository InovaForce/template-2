// next.config.mjs
export default {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'google.com',
        port: '',
        pathname: '**',
      },
      
    ],
  },
}
