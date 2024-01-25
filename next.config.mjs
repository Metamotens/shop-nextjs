/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/products',
                basePath: false,
                permanent: false
            },
        ];
    },
};

export default nextConfig;
