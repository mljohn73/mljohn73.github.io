<script lang="ts">

  export default {
    name: 'Photo',
    props: {
      name: String,
      shortName: String,
      host: String,
      filePath: String,
      isVid: Boolean,
      isHeic: Boolean
    }
  }
</script>

<template>
  <div v-if="isVid">
    <video class="pic" controls :name="name">
        <source :src="host + 'static/' + filePath" type="video/mp4">
        Your browser does not support HTML videos.
    </video>
  </div>
  <div  v-else-if="!isHeic">
    <RouterLink :to="'/static/photo/' + shortName"><img class="pic" :src="host + 'static/' + filePath"/></RouterLink>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .photo {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .pic {
    max-height:200px;
    max-width:300px;
    padding: 5px;
  }
}
</style>
  