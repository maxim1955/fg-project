import api from "../dbquery/dbConnect";


// Функция для выполнения GET-запроса для авторизации
export const getUser = async (login, password) => {
    try {
        console.log(import.meta.env)
        const response = await api.get('/api/login', {
            params: {
                login: login,
                password: password
            }
        });
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Ошибка при запросе===:', error);
        throw error;
    }
};
