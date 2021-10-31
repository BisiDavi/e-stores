/** @type {import('next').NextConfig} */
const { withCountryInfo } = require('./lib/parseCountries')

module.exports = withCountryInfo({
    reactStrictMode: true,
    images: {
        domains: ["flagcdn.com"],
    },
});
