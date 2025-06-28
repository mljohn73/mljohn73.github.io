<script lang="ts">

export default {
  data() {
    return {
      imageDir: "http://localhost:3000/static/"
    }
  }
}
</script>

<template>
  <div class="photo">
    <video class="vid" controls autoplay :name="$route.params.videoName">
        <source :src="imageDir + $route.params.videoName + '.mp4'" type="video/mp4">
        Your browser does not support HTML videos.
    </video>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .photo {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: start;
  }
  .vid {
    max-height:600px;
    max-width:100%;
  }
}
</style>
  