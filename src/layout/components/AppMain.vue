<template>
  <el-header>
    <Header />
  </el-header>
  <el-main>
    <section class="app-main">
      <router-view />
    </section>
  </el-main>
</template>

<script setup lang="ts">
import Header from './Header/Header.vue'

</script>

<style scoped>
</style>
