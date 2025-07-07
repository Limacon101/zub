
<script setup lang="ts">
import {NButtonGroup, NFlex, NButton} from 'naive-ui'

const props = defineProps<{
  zubTitle: string
  lang: string
  coinName?: string
  coinSymbol?: string
  coinUri?: string
}>();

const onBuy = () => {
  console.log('Buy coin:', props.coinSymbol);
  // todo: Implement buy functionality
};

const onView = () => {
  console.log('View coin:', props.coinUri);
  // todo: Implement view functionality
};
</script>

<template>
  <n-flex align="baseline">
    <span>[{{ lang }}] {{ zubTitle }}</span>
    <n-button-group>
      <n-button ghost round type="primary" @click="onBuy">
        Buy
      </n-button>
      <n-button ghost round type="info" @click="onView">
        View
      </n-button>
    </n-button-group>
  </n-flex>
</template>
