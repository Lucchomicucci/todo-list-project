import * as React from "react"
import { ToDoI } from "../../interfaces/interfaces"
import ToDoItem from "../toDoItem/toDoItem"
import styles from './styles.module.css'

const test = [
    {   
        id: 1,
        title: "First todo",
        done: false
    },
    {
        id: 2,
        title: "Second todo",
        done: false
    }
]
const ToDoList: React.FC = () => {

    const [toDos, setToDos] = React.useState<ToDoI[]>(test)

    return(
        <div className={styles.container}>
        {
            toDos?.map(td => <ToDoItem toDo={td} key={td.id}/>)
        }
        </div>
    )
}

export default ToDoList