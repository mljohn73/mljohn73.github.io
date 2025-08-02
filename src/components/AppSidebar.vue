<script setup lang="ts">
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from '@/components/ui/sidebar'
import DarkMode from './DarkMode.vue';
</script>

<template>
  <Sidebar>
    <SidebarHeader>
      <div>
        <DarkMode/>
      </div>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup />
      <SidebarGroup />
    </SidebarContent>
    <SidebarFooter />
  </Sidebar>
</template>