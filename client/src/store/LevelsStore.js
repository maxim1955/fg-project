import {defineStore} from 'pinia'
import axios from "axios";

const useLevelsStore = defineStore('LevelsStore' , {
    state: () => {
        return {
            levels: JSON.parse(sessionStorage.getItem('levels')) || null,
            currentLevel: 1,
            currentTask: 1,
        }
    },

    actions: {
        async getLevels() {
            try {
                const response = await axios.get('/api/tasks');
                this.levels = response.data.data
                sessionStorage.setItem('levels', JSON.stringify(this.levels));
                console.log(this.levels)
            }
            catch (error) {
                console.log(error)
            }
        },
        updateCurrentLevel(id) {
            this.currentLevel = id;
        },
        updateCurrentTask(id) {
            this.currentTask = id;
        }

    },

})

export default useLevelsStore
