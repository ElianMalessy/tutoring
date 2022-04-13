const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextConfig = {
  images: {
    domains: ['gluiq.com', 'cdn.discordapp.com'],
    disableStaticImages: true
  }
};

module.exports = withPlugins([withImages()], nextConfig);
