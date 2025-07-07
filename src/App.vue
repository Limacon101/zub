<script setup>
import ZoraHeader from './components/ZoraHeader.vue'
import VidSelector from "@/components/VidSelector.vue";
import SubsPanels from "@/components/SubsPanels.vue";

import { NConfigProvider, darkTheme } from 'naive-ui'
import { ref } from 'vue'

const isDark = ref(true);

</script>

<template>
  <n-config-provider :theme="isDark ? darkTheme : undefined">
  <main class="main-grid">
    <header class="header">
      <img alt="Vue logo" class="logo" src="./assets/zub.png" width="64" height="64" />

      <div class="wrapper">
        <ZoraHeader />
      </div>
    </header>

    <div class="vid-container">
      <vid-selector />
    </div>
    <div>
      <subs-panels />
    </div>
  </main>
  </n-config-provider>
</template>

<style scoped>
.main-grid {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
}

.header {
  grid-column-start: 1;
  grid-column-end: 3;
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.vid-container {
  width: 100%;
  max-height: 400px;
  max-width: 400px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
