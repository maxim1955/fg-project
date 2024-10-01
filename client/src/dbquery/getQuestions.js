import api from "../dbquery/dbConnect";


// Функция для выполнения GET-запроса для получения вопросов и ответов к заданиям
export const getQuestions = async () => {
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

export const getAnswers = async () => {
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

export const getPromts = async () => {
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
