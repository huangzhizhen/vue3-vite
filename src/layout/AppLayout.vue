<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="sidebar-container"  :style="{'width':(isCollapse?'63px':'230px')}">
        <AppMenu/>
      </el-aside>
      <el-container class='main-box'>
        <AppMain></AppMain>
      </el-container>
    </el-container>
  </div>
</template>


<script setup lang="ts">
  import { useAppLayoutStore } from '@/store/modules/appLayout'
  import AppMenu from './components/AppMenu/AppMenu.vue'
  import AppMain from './components/AppMain.vue';
  const appLayoutStore = useAppLayoutStore()
  const isCollapse = ref(appLayoutStore.isCollapse)
  console.log('isCollapse',appLayoutStore.isCollapse)
</script>
<style scoped>
</style>
