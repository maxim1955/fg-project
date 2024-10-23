<template>
  <div class="chat">
    <div class="chat__title-container">
      <h1 class="chat__title">ЗАДАТЬ ВОПРОС</h1>
      <img class="chat__titile-underline" src="../assets/img/Underline.svg" alt="">
    </div>

    <form class="chat__form">
      <div class="chat__message-area" id="chat_scroller">
<!-- 
        <div class="chat__message">
          <div class="chat__message-container chat__message_container_into ">
            <p class="chat__message-text">В личном кабинете ты узнаешь свои баллы и место в списке лучших в классе,
              выберешь себе красивого персонажа из нескольких вариантов, обменяешь бонусные баллы на крутые призы.</p>
            <span class="chat__message-date">Пн, 1 апр.</span>
          </div>
          <img class="chat__message-figure chat__message-figure-into" src="../assets/img/message-figure-into.svg"
            alt="" />
        </div>

        <div class="chat__message chat__message_out">
          <div class="chat__message-container chat__message_container_out">
            <p class="chat__message-text">В личном кабинете ты узнаешь свои баллы и место в списке лучших в классе,
              выберешь себе красивого персонажа из нескольких вариантов, обменяешь бонусные баллы на крутые призы.</p>
            <span class="chat__message-date">Пн, 1 апр.</span>
          </div>
          <img class="chat__message-figure chat__message-figure-out" src="../assets/img/message-figure-out.svg"
            alt="" />
        </div>


        <div class="chat__message">
          <div class="chat__message-container chat__message_container_into ">
            <p class="chat__message-text">В личном кабинете ты узнаешь свои баллы</p>
            <span class="chat__message-date">Пн, 1 апр.</span>
          </div>
          <img class="chat__message-figure chat__message-figure-into" src="../assets/img/message-figure-into.svg"
            alt="" />
        </div> -->

        <div class="chat__message" v-for="(message) in chatMsgsArray[0]" :key="message" :class="{
          chat__message_out: message.sendor === iAmUser,
        }">
          <div class="chat__message-container" :class="{
            chat__message_container_out: message.sendor === iAmUser,
            chat__message_container_into: message.sendor !== iAmUser,
          }">
            <p class="chat__message-text">{{ message.message }}</p>
            <span class="chat__message-date">{{  formatDateForMsgs(new Date(message.datetime)) }}</span>
          </div>
          <img class="chat__message-figure chat__message-figure-into" src="../assets/img/message-figure-into.svg" alt=""
            :class="{
              hidden: message.sendor === iAmUser,
            }" />
          <img class="chat__message-figure chat__message-figure-out" src="../assets/img/message-figure-out.svg" alt=""
            :class="{
              hidden: message.sendor !== iAmUser,
            }" />
        </div>
        <div id="chat_anchor"></div>
      </div>


      <div class="chat__func-container">
        <textarea placeholder="Напишите сообщение..." class="chat__input" @input="resize($event)" v-model="messageToSend"></textarea>
        <div class="chat__buttons-container">
          <div class="chat__button-other"></div>
          <!-- <file></file> ?? -->
          <button class="chat__submit" type="button" @click="sendMessage">Отправить</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
const resize = (e) => {
  e.target.style.height = 'auto'; // Reset height to auto to calculate scrollHeight
  e.target.style.height = `${e.target.scrollHeight}px`; // Set height to scrollHeight
};

// import axios from "axios";
import userStore from '../store/UserStore';
import { getChatMsgs, postChatMsg } from '../dbquery/ChatMsgs.js'
import { onMounted, ref } from 'vue';

// Получение календарной даты и времени для отправки на сервер и показа локально // Получение календарной даты и времени для отправки на сервер и показа локально
const userTimeZoneOffset = new Date().getTimezoneOffset() * -1; // Convert to positive value
// Get user's local time in their timezone
const userLocalDate = new Date(new Date().getTime() + userTimeZoneOffset * 60 * 1000);
const formattedUserDate = userLocalDate.toISOString().replace('T', ' ').substring(0, 19); // Format for SQL
// Get UTC+3 time
const utcOffset = 0; // UTC+0 offset in milliseconds
const UtcDateServer = new Date(new Date().getTime() + utcOffset);
const formattedUtcDateServer = UtcDateServer.toISOString().replace('T', ' ').substring(0, 19); // Format for SQL
// console.log("User  Local Time (SQL format):", formattedUserDate);
// console.log("UTC+0 Time (SQL format):", formattedUtcDateServer);

// Форматирование календарной даты для сообщений
const days = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота', 'Воскресенье'];
const months = ['Янв','Фев','Март','Апр','Май','Июнь','Июль','Авг','Сен','Окт','Нояб','Дек'];
function getDayName(date) {
    if (!(date instanceof Date)) {
        throw new Error('Input must be a Date object');
    }
    return days[date.getDay()];
}

function getMonthName(date) {
    if (!(date instanceof Date)) {
        throw new Error('Input must be a Date object');
    }
    return months[date.getMonth()];
}
function formatDateForMsgs(date) {
    if (!(date instanceof Date)) {
        throw new Error('Input must be a Date object');
    }
    const day = getDayName(date);
    const month = getMonthName(date);
    const dayOfMonth = date.getDate();
    return `${day}, ${dayOfMonth} ${month}`;
}

// Инициализирование массива сообщений и проверка текущего юзера из пинии
const chatMsgsArray = ref([]);
const userID = userStore().user.id;
const iAmUser = ref(userID);
console.log(iAmUser)

// Получение всех сообщений юзера с сервера
let chatGetMessages = async () => {
  try {
    const { data: messages } = await getChatMsgs(userID);
    chatMsgsArray.value = [messages];
    // console.log(chatMsgsArray.value[0]);
    // // console.log(chatMsgsArray.value[0].data[0]);
    // console.log("^^^ Those are the MSGS i got ^^^")
  } catch (error) {
    console.log(error)
  }
}
onMounted(async () => {
  chatGetMessages();
  setInterval(function() {
    chatGetMessages();
}, 5000);
});

// Отправка сообщения от юзера на сервер
const messageToSend = ref('');
let sendMessage = async () => {
  try {
    // Create the data object as expected by postChatMsg
    const data = {
      sendor: userID  , // Assuming userID is defined elsewhere
      recepient: 2,   // Replace with the actual recipient ID
      message: messageToSend.value,
      datetime: formattedUtcDateServer,
      tipe: 0         // Adjust this as necessary (e.g., text, image, etc.)
    };

    // Call the postChatMsg function with the data object
    let response = await postChatMsg(data);

    // Log the response data
    console.log("I send this === ", response.data);
    chatMsgsArray.value.push(response.data);
    messageToSend.value = '';
  } catch (error) {
    console.log(error);
  }
};

// // Поведение окна с сообщениями
// let scroller = document.querySelector("#chat_scroller");
// let anchor = document.querySelector("#chat_anchor");

// const config = { childList: true };
// const callback = function (mutationsList, observer) {
//   for (let mutation of mutationsList) {
//     if (mutation.type === "childList") {
//       window.scrollTo(0, document.body.scrollHeight);
//     }
//   }
// };
// const observer = new MutationObserver(callback);
// observer.observe(scroller, config);
</script>

<style>
.chat {
  width: 100%;
}

.chat__title-container {
  max-width: 529px;
  white-space: nowrap;
  margin-bottom: 20px;
}

.chat__title {
  font-family: Unbounded;
  font-weight: 700;
  font-size: 48px;
  line-height: 57.6px;
}

.chat__form {
  width: 100%;
  min-height: 600px;
  background-color: #FFFFFF;
  border: 6px solid #FFFFFF;
  border-radius: 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.chat__message-area {
  max-width: 100%;
  height: 450px;
  margin: 28px 10px 5px 10px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.chat__message-area::-webkit-scrollbar {
  background-color: transparent;
  width: 4px;
}

.chat__message-area::-webkit-scrollbar-thumb {
  background-color: #812D9C;
  border-radius: 50px;
}

.chat__message {
  position: relative;
}

.chat__message_out {
  align-self: flex-end;
}

.chat__message-container {
  position: relative;
  max-width: 518px;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  font-family: Nunito Sans;
  font-weight: 600;
}

.chat__message_container_into {
  margin-left: 40px;
  background-color: #812D9C;
  color: #FFFFFF;
  border-radius: 20px 20px 20px 0;
  margin-right: 60px;
}

.chat__message_container_out {
  margin-right: 40px;
  margin-left: 60px;
  align-self: flex-end;
  background-color: #F2F1EC;
  color: black;
  border-radius: 20px 20px 0 20px;
}

.chat__message-figure {
  width: 44px;
  height: 39.5px;
  position: absolute;
}

.chat__message-figure-into {
  left: 20px;
  bottom: 0px;
}

.chat__message-figure-out {
  right: 20px;
  bottom: 0px;
}

.chat__message-text {
  font-size: 16px;
  line-height: 19.2px;
}

.chat__message-date {
  margin-left: auto;
  opacity: 60%;
  font-size: 14px;
  line-height: 16.8px;
}

.chat__func-container {
  display: flex;
  width: 100%;
  min-height: 100px;
  max-height: 300px;
  background-color: #F2F1EC;
  border-radius: 0 0 45px 45px;
  margin-top: auto;
}

.chat__input {
  background-color: transparent;
  font-size: 18px;
  line-height: 21.6px;
  border: none;
  outline: none;
  width: 100%;
  min-height: 70%;
  max-height: 240px;
  margin-bottom: 20px;
  margin-top: 10px;
  margin-left: 20px;
  resize: none;
  box-sizing: border-box;
}

.chat__buttons-container {
  display: flex;
  max-height: 73px;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 20px;
  gap: 10px;
  max-width: 258px;
}

.chat__submit {
  background-color: #C9FF22;
  border: 2px solid #C9FF22;
  padding: 20px 32px;
  border-radius: 50px;
  cursor: pointer;
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 24px;
  line-height: 32.74px;
  max-width: 190px;
  max-height: 73px;
  transition: background-color 0.3s;
}

.chat__submit:hover {
  background-color: #FFFFFF;
}

.chat__button-other {
  cursor: pointer;
  background-image: url('../assets/img/button-pin.svg');
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: auto;
  margin-bottom: auto;
  width: 24px;
  height: 24px;
}

@media screen and (max-width: 1450px) {
  .chat__buttons-container {
    margin-bottom: auto;
    margin-top: 20px;
  }

  .chat__submit {
    max-width: 145px;
    padding: 14px 20px;
    font-size: 20px;
    line-height: 27.28px;
  }

  .chat__input {
    margin-top: 20px;
  }

  .chat__title-container {
    max-width: 287px;
  }

  .chat__title {
    font-size: 26px;
    line-height: 31.2px;
  }
}

@media screen and (max-width: 1200px) {
  .chat__message-area {
    gap: 20px;
    margin: 20px 0 5px;
  }
}

@media screen and (max-width: 744px) {
  .chat__message-text {
    font-size: 14px;
    line-height: 16.8px;
  }

  .chat__message-date {
    font-size: 12px;
    line-height: 14.4px;
  }

  .chat__input {
    font-size: 16px;
    line-height: 19.2px;
  }
}

@media screen and (max-width: 660px) {

  .chat__submit {
    background-image: url('../assets/img/button-tg.svg');
    background-position: 20% 50%;
    background-repeat: no-repeat;
    text-indent: -9999px;
    max-width: 40px;
    max-height: 40px;
    border: 100px;
  }
}

@media screen and (max-width: 519px) {

  .chat__message-area {
    gap: 12px;
  }

  .chat__message_container_into {
    margin-right: 20px;
    margin-left: 20px;
  }

  .chat__message_container_out {
    margin-left: 20px;
    margin-right: 20px;
  }

  .chat__message-figure-into {
    left: 0px;
    bottom: 0px;
  }

  .chat__message-figure-out {
    right: 0px;
    bottom: 0px;
  }
}
</style>
