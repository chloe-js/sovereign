/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/book',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
