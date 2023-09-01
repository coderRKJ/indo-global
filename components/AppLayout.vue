<script setup lang="ts">
const alpine = useAppConfig().alpine

defineProps({
  padded: {
    type: Boolean,
    default: true
  }
})

useHead({
  meta: [
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
})

useContentHead(alpine as any)
</script>

<template>
  <div>
    <AppHeader v-if="alpine.header" />
    <Container class="app-layout">
      <div class="spacer" />
      <AppLoadingBar />
      <slot />
      <AppFooter v-if="alpine.footer" />
    </Container>
  </div>
</template>

<style lang="ts">
css({
  'div.spacer': {
    minHeight: '{space.16}',
  },
  '.app-layout': {
    minWidth: '{size.xs}'
  },
  'h2>a': {
    textDecoration: 'none',
    backgroundImage: 'linear-gradient(to right, currentColor 50%, transparent 50%)',
    backgroundSize: '200% 3px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '100% 100%',
    transition: 'background-position .3s'
  },
  'h2>a:hover': {
    backgroundPosition: '0% 100%'
  }
})
</style>