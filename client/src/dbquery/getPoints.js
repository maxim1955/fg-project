import api from "../dbquery/dbConnect";


// Функция для выполнения GET-запроса для получения результатов
export const getPoints = async () => {
    try {
        const response = await api.get('/api/taskresults');
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Ошибка при запросе===:', error);
        throw error;
    }
};
