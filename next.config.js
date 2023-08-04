/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ["src/styles"],
    prependData: `
      @import "./src/styles/variables/typography.scss";
      @import "./src/styles/variables/colors.scss";
      @import "./src/styles/variables/devices.scss";
      `,
  }
}

module.exports = nextConfig
