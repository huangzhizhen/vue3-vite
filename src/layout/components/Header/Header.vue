<template>
 <div class="navbar">
    <el-row>
      <el-col :span="1">
        <el-button type="text" @click="appLayoutStore.toggleCollapse"><el-icon  :size="25"><fold /></el-icon></el-button>
      </el-col>
    </el-row>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">
        homepage
      </el-breadcrumb-item>
      <el-breadcrumb-item
      ><a href="./">route 1</a></el-breadcrumb-item
      >
      <el-breadcrumb-item>route 2</el-breadcrumb-item>
      </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
  import { useAppLayoutStore } from '@/store/modules/appLayout'
  const appLayoutStore = useAppLayoutStore()
</script>

<style scoped lang="scss">
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
}
</style>
