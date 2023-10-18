<!-- TODO: make Connection component a global component -->
<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  code: {
    type: Number,
    default: 0,
  },
})

const connections = [
  {
    color: 'text-red-5',
    border: 'border-red-5',
    status: 'Not Connected',
    description: 'Please Check Your Connection!',
  },
  {
    color: 'text-green-5',
    border: 'border-green-5',
    status: 'Connected',
    description: 'Everything is Working Perfectly!',
  },
  {
    color: 'text-yellow-5',
    border: 'border-yellow-5',
    status: 'Connecting',
    description: 'Just a Moment, We"re Getting There!',
  },
  {
    color: 'text-orange-5',
    border: 'border-orange-5',
    status: 'Disconnecting',
    description: 'Preparing to Safely Disconnect!',
  },
]

const connection = computed(() => connections[props.code])
</script>

<template>
  <NPanelGrids>
    <div v-if="code === 1" class="mongodb" />
    <MongoDB z-9 h-24 w-24 border-1 rounded-6 :class="connection.border" />
    <div z-9 flex="~ gap-2" animate-pulse items-center text-lg font-bold :class="connection.color">
      ({{ code }}):
      {{ connection.status }},
      {{ connection.description }}
    </div>
    <div z-9 absolute bottom-10 left-10 right-10 flex justify-around>
      <NCard v-for="item, index of connections" :key="index" p2 :class="[item.color, item.status === connection.status ? item.border : '']">
        ({{ index }}): {{ item.status }}
      </NCard>
    </div>
  </NPanelGrids>
</template>

<style>
.mongodb::before {
  content: '';
  width: 400px;
  height: 400px;
  z-index: 9999;
  position: absolute;
  z-index: 0;
  transition: all ease 0.3s;
  background-color: #10a74f30;
  top: 50%;
  left: 50%;
  filter: blur(150px);
  transform: translate(-50%, -50%);
  @apply animate-pulse;
}
</style>
