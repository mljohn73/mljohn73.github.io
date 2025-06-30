<script setup lang="ts">
import IconHamburger from "../components/icons/IconHamburger.vue";
import { RouterLink } from "vue-router";
import { defineComponent } from "vue";

function toggleMenu() {
  const navMenu = document.querySelector('#navigation-menu');
  const hamburgerIconGroup = document.querySelector('#hamburger-icon-svg-group');
  navMenu.classList.toggle('nav-active');
  hamburgerIconGroup.classList.toggle('menu-open');
}
</script>
<template>
  <div class="wrapper">
    <IconHamburger class="hamburger-link" id="hamburger-icon" @click="toggleMenu()" />
    <nav id="navigation-menu">
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">About Me</RouterLink>
        </li>
        <li>
          <RouterLink to="/story">Story</RouterLink>
        </li>
        <li>
          <RouterLink to="/photos">Photos</RouterLink>
        </li>
        <li>
          <RouterLink to="/static/photo/Freckles1">Freckles</RouterLink>
        </li>
        <li>
          <RouterLink to="/static/video/Frankie">Frankie</RouterLink>
        </li>
        <li>
          <RouterLink to="/static/photo/Theo1">Theo</RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style>
nav {
  position: absolute;
  left: 0px;
  height: 92vh;
  top: 8vh;
  background-color: wheat;
  width: 20%;
  font-size: 12px;
  text-align: center;
  transform: translateX(-100%);
  transition: transform 0.5s ease-in;
}

nav ul {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 40vh;
  padding: 0px;
}

nav ul li {
  list-style: none;
  font-size: 20px;
  opacity: 0;
  transform: translatex(-200px);
  transition: transform 0.5s ease-in;
}

nav.nav-active ul li {
  opacity: 100;
  transform: translatex(0px);
  transition: transform 0.5s ease-in;
}

nav a.router-link-exact-active {
  color: var(--color-nav);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.nav-active {
  transform: translateX(0%);
  transition: transform 0.5s ease-in;
}

.hamburger-link {
  cursor: pointer;
  fill: var(--color-nav);
  transition: transform 0.5s ease-in;
}

svg g .rect-1 {
  transform: rotate(0deg) translatey(0px) translatex(0px);
  transition: transform 0.5s ease-in;
}

svg g .rect-2 {
  opacity: 100;
  transition: opacity 0.5s ease-in;
}

svg g .rect-3 {
  transform: rotate(0deg) translatey(0px) translatex(0px);
  transition: transform 0.5s ease-in;
}

svg g.menu-open .rect-1{
  transform: rotate(45deg) translatey(-26px) translatex(12px);
  transition: transform 0.5s ease-in;
}

svg g.menu-open .rect-2{
  opacity: 0;
  transition: opacity 0.5s ease-in;
}

svg g.menu-open .rect-3{
  transform: rotate(-45deg) translatey(4px) translatex(-42px);
  transition: transform 0.5s ease-in;
}
</style>
