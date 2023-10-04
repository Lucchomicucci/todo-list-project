import * as React from "react"
import { ToDoI } from "../../interfaces/interfaces"
import ToDoItem from "../toDoItem/toDoItem"
import styles from './styles.module.css'
import AddToDo from "../addToDo/addToDo"
import { createToDo, getAllToDos } from "../../services/todoServices"

const ToDoList: React.FC = () => {

    const [toDos, setToDos] = React.useState<ToDoI[]>([])

    const deleteToDo = (id: string) => {
        const newList = toDos.filter(td => td._id != id )
        setToDos(newList)
    }
        
    const addToDo = (title: string) => {
        const newToDo = {
            done: false,
            title
        }
        createToDo(newToDo)
        .then( res => {
            console.log(res)
            const {done, title, _id} = res.data
            setToDos([...toDos, {done, title, _id }])
        })
        .catch(error => console.log(error))
    }

    React.useEffect(() => {
        getAllToDos()
        .then(res => {
            console.log(res)
            setToDos(res.data)
        })
        .catch(error => console.log(error))
    }, [])

    return(
        <div className={styles.container}>
            <AddToDo handleSubmit={addToDo} />
            {toDos?.length > 0 ? (
                toDos?.map(td => <ToDoItem toDo={td} key={td._id} handleDelete={deleteToDo} />)
            ) : (
                <p>There's not to do's</p>
            )}
        </div>
    )
}

export default ToDoList