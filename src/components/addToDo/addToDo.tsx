import { Button, Input } from "antd"
import { useState } from "react"
import styles from './styles.module.css'

interface Props {
    handleSubmit: (arg0: string) => void
}

const AddToDo: React.FC<Props> = ({handleSubmit}) => {

    const [value, setValue] = useState<string>('')

    const saveToDo = () => {
        if(value.length > 2){
            handleSubmit(value)
            setValue('')
        }
    }

    return(
        <div className={styles.container}>
        <Input placeholder="Write your to do here..." value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
        <Button type="primary" onClick={saveToDo}>Add</Button>
        </div>
    )
}

export default AddToDo