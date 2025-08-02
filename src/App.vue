<script setup lang="ts">
  import AppSidebar from '@/components/AppSidebar.vue'
  import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
  import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
</script>
<template>
  <SidebarProvider>
    <AppSidebar />
    <main>
      <SidebarTrigger />
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          Card Content
        </CardContent>
        <CardFooter>
          Card Footer
        </CardFooter>
      </Card>
      <RouterView />
    </main>
  </SidebarProvider>
</template>

<style scoped>
</style>
