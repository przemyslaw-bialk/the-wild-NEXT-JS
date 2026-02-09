/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dafjcirxbepcccvsbkmx.supabase.co",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
  // FOR STATIC
  // output: "export",
};

export default nextConfig;
