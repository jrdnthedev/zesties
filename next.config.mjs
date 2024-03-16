/** @type {import('next').NextConfig} */
const nextConfig = {
  //added to highlight problems for dev debugging
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:5000/api/:path*", // Replace with your backend URL
      },
    ];
  },
};

// import withSass from "@zeit/next-sass";

export { nextConfig };
