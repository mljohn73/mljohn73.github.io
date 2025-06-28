<script setup lang="ts">
import IconBack from "../components/icons/IconBack.vue";
import { RouterLink } from 'vue-router' 

  const imageDir = "http://localhost:3000/static/"

</script>

<template>
  <div class="single-picture-view">
    <div class="breadcrumb">
      <RouterLink to="/photos"><IconBack/></RouterLink>
    </div>
    <img class="pic-large" :src="imageDir + $route.params.photoName + '.jpg'" />
</div>
</template>

<style>
@media (min-width: 1024px) {
  .single-picture-view {
    height: 86vh;
    padding: 4vh 0px 0px 0px;
    display: grid;
    grid-template-columns: 80px 1fr 80px;
    grid-template-rows: 1fr;
    justify-items: center;
  }

  .pic-large {
    max-height: 78vh;
  }

  .breadcrumb {
    stroke: var(--color-nav);
    cursor: pointer;
  }
}
</style>
  