import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        hostname:"lh3.googleusercontent.com"
      },
      {
        hostname:"avatars.githubusercontent.com"
      }
    ]
  },
  allowedDevOrigins: ['7499-103-50-79-140.ngrok-free.app'],
};

export default nextConfig;