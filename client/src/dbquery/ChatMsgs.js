import api from "../dbquery/dbConnect";


// Функция для выполнения GET-запроса для сообщений чата
export const getChatMsgs = async (userID) => {
    try {
        const response = await api.get('/api/chat', {
            params: {
                userID: userID
            }
        });
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Ошибка при запросе===:', error);
        throw error;
    }
};

// Функция для выполнения POST-запроса для авторизации
export const postChatMsg = async (
    sendor,
    recepient,
    message,
    datetime,
    tipe
) => {
    try {
        const response = await api.get("/api/chat/newmessage", {
            params: {
                sendor: sendor,
                recepient: recepient,
                message: message,
                datetime: datetime,
                tipe: tipe,
            },
        });
        console.log(response);
        return response.data;
    } catch (error) {
        console.error("Ошибка при запросе===:", error);
        throw error;
    }
};
