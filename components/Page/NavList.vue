<script setup lang="ts">
import { PropType } from 'vue'

export type ListItem = {
  href: string,
  text: string,
  children: ListItem[],
}
const props = defineProps({
  links: {
    type: Array as PropType<ListItem[]>,
    required: true
  },
  isNested: {
    type: Boolean,
    default: false
  }
})
const toggleMenu = (element) => {
  var classList = element.target.classList
  if (classList.contains('active')) {
    classList.remove('active')
  } else {
    classList.add('active')
  }
}
</script>

<template>
  <ul>
    <li v-for="link in props.links" v-bind:key="link.text">
      <span v-if="link.children && link.children.length > 0" class="opener" @click="toggleMenu">{{ link.text }}</span>
      <NuxtLink v-else :href="link.href">{{ link.text }}</NuxtLink>
      <NavList v-if="link.children && link.children.length > 0" :links="link.children" />
    </li>
  </ul>
</template>