export function isProd(env: any) {
    return env.ENVIRONMENT === 'prod' || env.ENVIRONMENT === 'production';
}

export function isDev(env: any) {
    return env.ENVIRONMENT === 'dev' || env.ENVIRONMENT === 'development' || env.ENVIRONMENT === 'local';
}
