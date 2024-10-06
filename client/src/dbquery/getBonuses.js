import api from "../dbquery/dbConnect";


// Функция для выполнения GET-запроса для бонусов
export const getBonuses = async () => {
    try {
        const response = await api.get('/api/bonus');
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Ошибка при запросе===:', error);
        throw error;
    }
};
