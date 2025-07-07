<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { NSpin } from 'naive-ui';
import ExistingSubtitle from "@/components/ExistingSubtitle.vue";
import { listExistingZubs, type SubtitleCoin } from "@/zora/listExistingZubs";

const coins = ref<SubtitleCoin[]>([]);
const isLoading = ref(true);
const error = ref('');

const loadExistingZubs = async () => {
  try {
    isLoading.value = true;
    error.value = '';
    coins.value = await listExistingZubs();
  } catch (err) {
    console.error('Failed to load existing zubs:', err);
    error.value = err instanceof Error ? err.message : 'Failed to load existing zubs coins';
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  loadExistingZubs();
});
</script>

<template>
  <div v-if="isLoading">
    <n-spin size="small">
      <div>Loading existing zubs...</div>
    </n-spin>
  </div>

  <div v-else-if="error" class="error-message">
    {{ error }}
  </div>

  <ul v-else-if="coins.length > 0">
    <li v-for="coin in coins" :key="coin.id">
      <existing-subtitle
          :zub-title="coin.videoTitle"
          :lang="coin.language"
          :coin-name="coin.name"
          :coin-symbol="coin.symbol"
          :coin-uri="coin.uri"
      />
    </li>
  </ul>

  <div v-else>
    <p>No existing Zub coins found.</p>
  </div>
</template>

<style scoped>
.error-message {
  color: #d03050;
  padding: 16px;
  background-color: #fef2f2;
  border-radius: 4px;
  border: 1px solid #fecaca;
}
</style>
