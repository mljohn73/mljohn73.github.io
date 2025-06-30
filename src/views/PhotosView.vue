<script lang="ts">
import axios from 'axios';
import Photo from '../components/Photo.vue'

export default {
  components:{
    Photo
  },
  data() {
    return {
      assetList: [],
      SERVER_HOST: "http://localhost:3000/"
    }
  },
  methods: {
    async getAssetList() {
      return axios.get(this.SERVER_HOST + "photos").then((files) => {
        return files;
      })
    }
  },
  async mounted() {
    const response = await this.getAssetList();
    if (response?.data) {
      this.$data.assetList = response.data;
    }
  }
}
</script>

<template>
  <div class="photos">
    <Photo v-for="asset in assetList" :key="asset" :name="asset.fileName" :shortName="asset.shortName" :host="this.SERVER_HOST" :filePath="asset.fileName" :isVid="asset.isVid" :isHeic="asset.isHeic"/>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .photos {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row;
    justify-content: center;
  }
}
</style>
  