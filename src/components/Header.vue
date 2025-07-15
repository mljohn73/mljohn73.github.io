<script setup lang="ts">
import HamburgerMenu from "../navigation/HamburgerMenu.vue";
import Banner from "./Banner.vue"
import Socials from "./Socials.vue"
</script>

<template>
    <HamburgerMenu class="hamburger"/>
    <Banner class="banner"/>
    <Socials class="socials"/>
</template>
<style>
.hamburger {
  grid-column: 1 / 2;
  justify-self: center;
  align-self: center;
}

.banner {
  grid-column: 2 / 3;
  justify-self: center;
  align-self: center;
}

.socials {
  grid-column: 3 / 4;
  justify-self: center;
  align-self: center;
}
</style>