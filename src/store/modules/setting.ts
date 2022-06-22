import { defineStore } from "pinia"

export const useSettingStore = defineStore('setting', {
    state: () => {
        return {
            count: 0
        }
    },
    getters: {
        getCount: (state) => state.count
    },
    actions: {
        updateCount() {
            this.count++
        },
    },
})