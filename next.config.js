const withPWA = require('next-pwa');
const prod = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
    reactStrictMode: true,
    pwa: {
        disable: !prod,
        dest: 'public',
    },
});

module.exports = nextConfig;
