module.exports = {
    images: {
        // wildcard: accept any https-hostname and any path
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '/**',
            },
        ],
    },

    env: {
        BASE_URL: process.env.ORGADO_SERVER_URL,
        ADMIN_URL: process.env.ORGADO_ADMIN_URL,
        IMGBB_URL: process.env.ORGADO_IMGBB_KEY,
        EMAIL_SERVICE_ID: process.env.EMAIL_SERVICE_KEY,
        EMAIL_PUBLIC_KEY: process.env.EMAIL_PUBLIC_KEY,
        EMAIL_TEMPLATE_ID: process.env.EMAIL_TEMPLATE_KEY,
    },
};
