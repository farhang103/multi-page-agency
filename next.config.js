/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        fontLoaders: [
            { loader: "next/font/google", options: { subsets: ["latin"] } },
        ],
    },
    webpack(config) {
        config.resolve.extensions.push(".ts", ".tsx");
        return config;
    },
};

module.exports = nextConfig;
