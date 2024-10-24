import api from "../dbquery/dbConnect";


// Функция для выполнения GET-запроса для сообщений чата
export const getChatMsgs = async (user_id) => {
    try {
        const response = await api.get('/api/chat', {
            params: {
              user_id: user_id
            }
        });
        // console.log(response)
        return response.data;
    } catch (error) {
        console.error('Ошибка при запросе===:', error);
        throw error;
    }
};

// // Функция для выполнения POST-запроса для авторизации
// export const postChatMsg = async (
//     sendor,
//     recepient,
//     message,
//     datetime,
//     tipe
// ) => {
//     try {
//         return api.post("/api/chat/newmessage", {
//             params: {
//                 sendor: sendor,
//                 recepient: recepient,
//                 message: message,
//                 datetime: datetime,
//                 tipe: tipe,
//             },
//         });
//     } catch (error) {
//         console.error("Ошибка при запросе===:", error);
//         throw error;
//     }
// };


// Function to post a chat message
export function postChatMsg(data) {
    // Validate the data structure (optional but recommended)
    // if (!data.sendor || !data.recepient || !data.message || !data.datetime || !data.tipe) {
    //   throw new Error("Invalid data structure");
    // }
  
    return api.post("/api/chat/newmessage", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }