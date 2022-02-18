require('dotenv').config();

module.exports = {
  async redirects() {
    return [
      {
        source: '//',
        destination: '/',
        permanent: true,
      },
    ];
  },
  env: {
    CF_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CF_DELIVERY_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    CF_PREVIEW_ACCESS_TOKEN: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  },
  images: {
    domains: ['dummyimage.com', 'images.ctfassets.net'],
  },
};
