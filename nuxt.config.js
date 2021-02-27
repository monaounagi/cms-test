const { MICRO_CMS_API_BASE_URL, MICRO_CMS_API_KEY } = process.env

export default {
  srcDir: 'src/',
  target: 'static',
  modules: ['@nuxtjs/axios'],
  privateRuntimeConfig: {
    MicroCmsApiBaseUrl: MICRO_CMS_API_BASE_URL,
    MicroCmsApiKey: MICRO_CMS_API_KEY,
  },
  publicRuntimeConfig: {
    MicroCmsApiBaseUrl: process.env.NODE_ENV !== 'production' ? MICRO_CMS_API_BASE_URL : undefined,
    MicroCmsApiKey: process.env.NODE_ENV !== 'production' ? MICRO_CMS_API_KEY : undefined
  },
}