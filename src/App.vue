<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue"
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <Header/>
  </header>
  <div class="page-container">
    <RouterView class="router-outlet"/>
    <Footer class="footer-container"/>
  </div>
</template>

<style scoped>
header {
  width:100%;
  line-height: 1.5;
  min-height: 8vh;
  background-color: var(--color-background-header);
  display: grid;
  grid-template-columns: 80px 1fr 80px;
  grid-template-rows: 1fr;
}

.page-container {
  display: flex;
  flex-direction: column;
  min-height: 92vh;
}

.router-outlet {
  flex: 1 0 auto;
}

.footer-container {
  flex-shrink: 0;
  height: 6vh;
  width: 100%;
}
</style>
