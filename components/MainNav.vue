<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
const { navigation } = useContent()
const router = useRouter()

const activeSection = ref("")

const hashes = ["services", "trade", "events", "resources", "membership", "support", "contact"];
const map = new Map([
  ["", "Indo-Global Chamber of Commerce"],
  ["services", "Services"],
  ["trade", "Trade Services"],
  ["events", "Events & Programs"],
  ["resources", "Resources and Tools"],
  ["membership", "Membership"],
  ["support", "Business Support"],
  ["contact", "Contact Us"]
])

const handleScroll = () => {
  activeSection.value = "";
  if (router.currentRoute.value.path != "/") return;

  for (const hash of hashes) {
    const el = document.getElementById(hash);
    if (el == null) continue;
    const rect = el.getBoundingClientRect();
    if (rect.top <= 75 && rect.bottom >= 75) {
      activeSection.value = hash;
      break;
    }
  }

  const value = map.get(activeSection.value);
  if (value) {
    useHead({title: value})
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  setInterval(handleScroll, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const emits = defineEmits(['linkClick'])

function handleClick() {
  emits('linkClick')
}

function convertToLink(path: string) {
  return { path: '/', hash: `#${path.replace('/', '')}Link` }
}
</script>

<template>
  <nav>
    <ul>
      <li v-for="link of navigation" :key="link._path">
        <NuxtLink
          :to="convertToLink(link._path)" :class="{ active: link._path.replace('/', '') === activeSection }"
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
        '&.active': {
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
