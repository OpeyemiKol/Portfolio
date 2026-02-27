import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "cdn.jsdelivr.net", // Devicon icons
      "assets.vercel.com", // Vercel logo
      "www.netlify.com", // Netlify logo
      "img.icons8.com", // Supabase icon from Icons8
    ],
  },
};

export default nextConfig;
