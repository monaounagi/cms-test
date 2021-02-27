<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="tag in tags" :key="tag.name">
        #{{ tag.name }}
      </li>
    </ul>
    {{ publishedAt }}
    <div v-html="body"></div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, $config, params, error }) {
    const response = await $axios.get(
      `${$config.MicroCmsApiBaseUrl}blog/${params.id}`,
      {
        headers: { 'X-API-KEY': $config.MicroCmsApiKey }
      }
    ).catch(err => {
      error({
        statusCode: err.response.status,
        message: err.response.data.message,
      })
      return err.response
    })
    return response.data
  }
}
</script>