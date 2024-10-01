import {defineStore} from 'pinia'

const useUserStore = defineStore('UserStore' , {
    state: () => {
        return {
            user: JSON.parse(sessionStorage.getItem('user')) || null
        }
    },

    actions: {
        updateUserInfo(obj) {
            this.user = obj;
            sessionStorage.setItem('user', JSON.stringify(obj));
        }
    }
})

export default useUserStore
