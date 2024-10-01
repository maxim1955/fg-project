import {defineStore} from 'pinia'
import axios from "axios";

const useLevelsStore = defineStore('LevelsStore' , {
    state: () => {
        return {
            levels: [],
            currentLevel: 1,
            currentTask: 1
        }
    },

    actions: {
        async getLevels() {
            try {
                const response = await axios.get('/api/tasks');
                this.levels = response.data
                console.log(this.levels)
            }
            catch (error) {
                console.log(error)
            }
        }
    }
})

export default useLevelsStore
