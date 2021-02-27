<template>
  <div>
    <h1>monaounagi test</h1>
    <ul>
      <li v-for="content in contents" :key="content.id">
        <nuxt-link :to="{ name: 'blog-id', params: { id: content.id } }">
          <h2>{{ content.title }}</h2>
          <ul>
            <li v-for="tag in content.tags" :key="tag.name">
              #{{ tag.name }}
            </li>
          </ul>
          {{ content.publishedAt }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, $config, error }) {
    const response = await $axios.get(
      `${$config.MicroCmsApiBaseUrl}blog?orders=-publishedAt`,
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
    const { contents } = response.data
    return { contents }
  }
}
</script>