import {defineStore} from 'pinia'
import axios from "axios";

const useUserStore = defineStore('UserStore' , {
    state: () => {
        return {
            user: {}
        }
    },

    actions: {
        async getUserInfo() {
            try {
                const response = await axios.get('');
                this.user = response.data
            }
            catch (error) {
                console.log(error)
            }
        },
        updateUserInfo(obj) {
            this.user = obj;
        }
    }
})

export default useUserStore
