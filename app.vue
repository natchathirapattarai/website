<script setup lang="ts">
const isLoaded = ref(false)
onMounted(() => {
  nextTick(() => {
    isLoaded.value = true
  })
})
</script>

<template>
  <Html>
    <Body :class="{ 'is-preload' : !isLoaded }">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
