import { defineStore } from 'pinia'

export const useTabOptionStore = defineStore('TabOptionStore', {
    state: () => ({
        option: 'table',
      }),
    getters: {
        getOption: (state) => state.option
    },
    actions: {
        Change(Val) {
            this.option = Val
        },
    },
    persist:true
})