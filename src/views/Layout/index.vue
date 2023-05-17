<template>
  <LayoutNav />
  <LayoutHeader />
  <RouterView></RouterView>
  <LayoutFooter />
</template>

<script setup>
  import LayoutNav from "./components/AppNavBar.vue";
  import LayoutHeader from "./components/AppHeader.vue";
  import LayoutFooter from "./components/AppFooter.vue";
</script>

<style lang="scss" scoped></style>
