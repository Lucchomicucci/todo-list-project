import * as React from "react"
import { ToDoI } from "../../interfaces/interfaces"
import ToDoItem from "../toDoItem/toDoItem"
import styles from './styles.module.css'
import AddToDo from "../addToDo/addToDo"

const ToDoList: React.FC = () => {

    const [toDos, setToDos] = React.useState<ToDoI[]>([])
    const idRef = React.useRef(0)

    const deleteToDo = (id: number) => {
        const newList = toDos.filter(td => td.id !== id )
        setToDos(newList)
    }
        
    const addToDo = (title: string) => {
        const newToDo = {
            id: idRef.current + 1,
            done: false,
            title
        }
        setToDos([...toDos, newToDo])
        idRef.current += 1
    }

    return(
        <div className={styles.container}>
            <AddToDo handleSubmit={addToDo} />
            {toDos?.length > 0 ? (
                toDos?.map(td => <ToDoItem toDo={td} key={td.id} handleDelete={deleteToDo} />)
            ) : (
                <p>There's not to do's</p>
            )}
        </div>
    )
}

export default ToDoList