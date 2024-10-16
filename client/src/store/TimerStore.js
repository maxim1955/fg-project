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
          interval: null // Добавьте interval в состояние
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
                this.interval = null;
                this.stopTimer();
                this.secondsRemaining = 0;
              }
              this.saveTimerData(); // Сохраняем состояние таймера
            }, 1000);
          },
          stopTimer() {
            console.log(this.interval)
            clearInterval(this.interval);
            this.interval = null;
            this.saveTimerData(); // Сохраняем состояние таймера
          },
          resetTimer() {
            this.secondsRemaining = 1800;
            this.stopTimer();
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
          }
    },

    getters: {
        formattedTime(state) {
          const minutes = Math.floor(state.secondsRemaining / 60);
          const seconds = state.secondsRemaining % 60;
          return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
      }


})

