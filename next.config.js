module.exports = {
  swcMinify: false,
  async redirects() {
      return [
        {
          source: '/blog',
          destination: '/',
          permanent: true,
        },
      ]
    },
};