import api from "../dbquery/dbConnect";


// Функция для выполнения GET-запроса для получения заданий
export const getTasks = async () => {
    try {
        console.log(import.meta.env)
        const response = await api.get('');
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Ошибка при запросе===:', error);
        throw error;
    }
};
