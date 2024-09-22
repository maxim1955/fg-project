import {defineStore} from 'pinia'
import axios from "axios";

const useLevelsStore = defineStore('LevelsStore' , {
    state: () => {
        return {
            levels: []
        }
    },

    actions: {
        async getLevels() {
            try {
                const response = await axios.get('/api/tasks');
                this.levels = response.data
            }
            catch (error) {
                console.log(error)
            }
        }
    }
})

export default useLevelsStore
