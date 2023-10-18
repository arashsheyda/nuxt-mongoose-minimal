<script setup lang="ts">
import { useIntervalFn } from '@vueuse/core'

const { data, refresh } = await useFetch('/api/status')
const readyState = ref(data.value ?? 0)

const { pause, resume } = useIntervalFn(async () => {
  refresh()
  readyState.value = data.value ?? 0
  console.log('re-checking...')
}, 5000)

watch((readyState), () => {
  if (readyState.value === 1)
    pause()
  else
    resume()
}, { immediate: true })
</script>

<template>
  <div h-screen>
    <Connection :code="readyState ?? 0" />
  </div>
</template>
