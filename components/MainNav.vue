<script lang="ts" setup>
const { navigation } = useContent()

//const route = useRoute()
const emits = defineEmits(['linkClick'])

function handleClick() {
  emits('linkClick')
}

function convertToLink(path:string) {
  // if (route.name == 'index') {
    return { path: '/', hash: `#${path.replace('/','')}Link` }
  // } else {
  //   return path
  // }
}
</script>

<template>
  <nav>
    <ul>
      <li
        v-for="link of navigation"
        :key="link._path"
      >
        <NuxtLink
          :to="convertToLink(link._path)"
          @click="handleClick"
        >
          <span class="underline-fx" />
          {{ link.title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="ts">
css({
  nav: {
    ul: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      justifyContent: 'center',
      gap: '{space.4}',
      '@md': {
        flexDirection: 'row',
        gap: '{space.8}',
      },
      a: {
        position: 'relative',
        '&.router-link-active': {
          color: '{color.primary.500}'
        },
        '.underline-fx': {
          position: 'absolute',
          bottom: '-4px',
          width: 0,
          height: '1px',
          backgroundColor: 'currentColor',
          transition: 'width 200ms ease-in-out',
          'a:hover &&': {
            width: '100%'
          }
        }
      },

    }
  }
})
</style>
