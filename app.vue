<script setup lang="ts">
const { data: readyState } = await useFetch('/api/status')
</script>

<template>
  <div h-screen>
    <Connection :code="readyState ?? 0" />
  </div>
</template>
