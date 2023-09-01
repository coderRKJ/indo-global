<script lang="ts" setup>
const { navigation } = useContent()

function hashLink(path:string) { 
  return `${path.replace('/','')}`
}
</script>

<template>
  <div>
    <section v-for="link of navigation" :id="hashLink(link._path)" :key="link._path">
      <ContentDoc :path="link._path" />
    </section>
  </div>
</template>