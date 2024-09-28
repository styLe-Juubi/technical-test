export const EnvConfiguration = () => ({
    enviroment: process.env.NODE_ENV || 'dev',
    db: process.env.DATABASE_SELECTED,
    mongodb: process.env.MONGODB,
    postgresql: process.env.POSTGRESQL,
    port: +process.env.PORT,
    apiVersion: process.env.API_VERSION,pagination: {
        defaultPage: +process.env.PAGINATION_DEFAULT_PAGE,
        defaultLimit: +process.env.PAGINATION_DEFAULT_LIMIT,
        defaultOrder: { 
            sort: { _id: +process.env.PAGINATION_DEFAULT_ORDER }
        },
    },
    aws: {
        accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
        bucketName: process.env.AWS_S3_BUCKET_NAME,
    },
});