import api from "../dbquery/dbConnect";


// Функция для выполнения GET-запроса для авторизации
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
