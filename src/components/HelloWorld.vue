<script setup lang="ts">

defineProps<{ msg: string }>()

const count = ref(0)
const increment = () => count.value++
</script>

<template>
  <h1>{{ msg }}</h1>
  <p>嘿嘿：{{ count }}</p>
  <el-button type="primary" @click="increment" >加一</el-button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
