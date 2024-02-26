<template>
  <el-menu
  class="el-menu-vertical-demo"
  background-color="#545c64"
  text-color="#fff"
  :collapse="isCollapse"
  @open="handleOpen"
  @close="handleClose"
  :collapse-transition="false"
  active-text-color="#ffd04b"
  router>
    <template v-for="(item,index) in list" :key="index">
      <router-link :to="item.path" v-if="!item.children">
        <el-menu-item :index="index + ''">
          <el-icon><component :is="item.icon"></component>
          </el-icon>
	        <span>{{ item.label }}</span>
        </el-menu-item>
      </router-link>

      <el-sub-menu :index="index+''" v-else>
        <!-- 一级标题 -->
        <template #title>
          <el-icon><component :is="item.icon"></component>
            </el-icon>
            <span>{{ item.label }}</span>
          </template>
        <template v-for="(item1,index1) in item.children" :key="index1">
          <router-link :to="item.path+item1.path">
            <el-menu-item :index="index+'-'+ index1 ">
              <el-icon><component :is="item1.icon"></component>
              </el-icon>
              <span>{{ item1.label }}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
  import { useAppLayoutStore } from '@/store/modules/appLayout'
const appLayoutStore = useAppLayoutStore()
  const isCollapse = ref(appLayoutStore.isCollapse)
  const list = [
    {
      path: '/home',
      name: 'home',
      label: '用户管理home',
      icon: 'user',
      url: '/home',
      children: [
        {
          path: '/children1',
          label: 'children1',
          icon: 'user',
          url: '/children1',
        },
        {
          path: '/children2',
          label: 'children2',
          icon: 'user',
          url: '/children2',
        }
      ]
    },
    {
      label: '其它',
      name: 'test2',
      icon: 'user',
      path: '/test2',
      url: '/test2'
    },
    {
      label: '设置',
      name: 'setting',
      icon: 'user',
      path: '/setting',
      url: '/setting'
    },

  ];
  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
  }
</script>

<style lang="scss" scoped>

.icons {
  width: 18px;
  height: 18px;
  margin-right: 4px;
}
.el-menu-vertical-demo {
  width: 100%;
  border-right: none;
  background-color: #304156;
  h3 {
    color: #fff;
    text-align: center;
    margin-top: 10px;
  }
}
</style>
