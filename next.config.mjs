/** @type {import('next').NextConfig} */
const nextConfig = {
  //added to highlight problems for dev debugging
  reactStrictMode: false,
};

import withSass from "@zeit/next-sass";

module.exports = withSass({
  /* additional configuration options */
});

export { nextConfig, withSass };
