import {defineStore} from 'pinia'
import axios from "axios";

export const useTimerAndDateStore  = defineStore('TimerStore' , {
    state: () => {
        const savedData = localStorage.getItem('timerData');
        if (savedData) {
          return JSON.parse(savedData);
        }
        return {
          today: new Date(),
          secondsRemaining: 1800,
          interval: null,
          lastUpdated: null,
        };
      },

    actions: {
        startTimer() {
            if (this.interval) { // Очистка предыдущего интервала
              clearInterval(this.interval);
              this.interval = null;
            }
            this.interval = setInterval(() => {
              this.secondsRemaining--;
              if (this.secondsRemaining < 0) {
                clearInterval(this.interval);
                // this.interval = null;
                this.stopTimer();
                this.secondsRemaining = 0;
                // this.updateToday();
              }
              this.saveTimerData(); // Сохраняем состояние таймера
            }, 1000);
          },

          stopTimer() {
            clearInterval(this.interval);
            this.interval = null;
            this.saveTimerData(); // Сохраняем состояние таймера
          },

          updateToday() {
            this.today = new Date();
            this.secondsRemaining = 1800;
            this.saveTimerData(); // Сохраняем состояние таймера
          },

          saveTimerData() {
            const dataToSave = {
              today: this.today,
              secondsRemaining: this.secondsRemaining
            };
            localStorage.setItem('timerData', JSON.stringify(dataToSave));
          },

            restoreTimerData() {
			const storedData = localStorage.getItem('timerData');
			if (storedData) {
				const data = JSON.parse(storedData);
				this.today = new Date(data.today);
				this.secondsRemaining = data.secondsRemaining;
				this.lastUpdated = data.lastUpdated;
			}
		}
    },

    getters: {
        formattedTime(state) {
          const minutes = Math.floor(state.secondsRemaining / 60);
          const seconds = state.secondsRemaining % 60;
          return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        },

        shouldUpdateTimer() {
            const now = new Date();
            const date = new Date(this.today);
            console.log(now, date)
            const diff = now - date;
            console.log(diff)
            return diff >= 24 * 60 * 60 * 1000
        }
      }


})

