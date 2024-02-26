<template>
  <div>
    <p>
      Count:{{ counterStore.count }}
      <button @click="counterStore.increment">+</button>
       <el-button type="primary" @click="counterStore.decrement">-</el-button>
    </p>
    <div v-for="item in dataList">
      <div>{{ item.name }}</div>
      <el-icon :size="16">
        <Edit />
      </el-icon>
      <el-icon size="22" color="#000">
        <IconIcBaseline5g />
       </el-icon>
      <el-icon size="22" color="#79bbff"><IconHomeCompany /></el-icon>
      <IconIcBaseline5kPlus></IconIcBaseline5kPlus>
    </div>
    <About></About>
     <el-input v-model="input" placeholder="Please input" />
  </div>
</template>

<script setup lang="ts">
import {getDeptList} from '@/api/dataBase/deptManager'
import { useCounterStore } from '@/store/modules/counter'
import { dataList } from '@/common/const'
const counterStore = useCounterStore()
const input = ref('')
// 挂载
onMounted(() => {
  getDeptList().then(res => {
    console.log(res)
  })
})
</script>

<style scoped lang="scss">
</style>

