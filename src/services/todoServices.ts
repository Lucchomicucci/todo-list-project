import axios from "../config/axios"

interface ToDo {
    done: boolean;
    title: string;
}

export const getAllToDos = async () => {
    try{
        const response = await axios.get('/todos')
        return response.data
    } catch (error) {
        console.error(error)
        return error
    }
}

export const createToDo = async (todo: ToDo) => {
    try{
        const response = await axios.post('/todos/new', {
            ...todo
        })
        return response.data
    } catch (error) {
        console.error(error)
        return error
    }
}