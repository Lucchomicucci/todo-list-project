import * as React from 'react';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { ToDoI } from '../../interfaces/interfaces';
import { DeleteFilled, EditFilled } from '@ant-design/icons';
import { Col, Row } from 'antd';
import styles from './styles.module.css'

interface Props {
    toDo: ToDoI;
    handleDelete: (arg0: number) => void    
}

const ToDoItem: React.FC<Props> = ({toDo, handleDelete}) => {
    const {title, done, id} = toDo

    const [checked, setChecked] = React.useState<boolean>(done ?? false)

    const onChange = (e: CheckboxChangeEvent) => {
        console.log(`checked = ${e.target.checked}`);
        setChecked(!checked)
    };

    return(
            <Row>
                <Col span={21}>
                    <Checkbox onChange={onChange} checked={checked} className={styles.todo}>
                        <p className={checked ? styles.check : ''}>{title}</p>
                    </Checkbox>
                </Col>
                <Col span={3} className={styles.icons}>
                    <EditFilled className={styles.icon} onClick={() => console.log('edit')}/>
                    <DeleteFilled className={styles.icon} onClick={() => handleDelete(id)}/>
                </Col>
            </Row>
    )
}

export default ToDoItem