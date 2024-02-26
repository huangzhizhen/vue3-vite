import { defineStore } from 'pinia'
export const useAppLayoutStore = defineStore('appLayout', {
  state: () => ({
    isCollapse: false,
  }),
  actions: {
    toggleCollapse() {
      this.isCollapse=!this.isCollapse
      console.log(this.isCollapse)
    },
  }
})
