import * as React from 'react';
import { Checkbox } from 'antd';
import { ToDoI } from '../../interfaces/interfaces';
import { DeleteFilled } from '@ant-design/icons';
import { Col, Row, Popconfirm, message } from 'antd';
import styles from './styles.module.css'

interface Props {
    toDo: ToDoI;
    handleDelete: (arg0: string) => void;
}

const ToDoItem: React.FC<Props> = ({toDo, handleDelete}) => {
    const {title, done, _id} = toDo

    const [checked, setChecked] = React.useState<boolean>(done ?? false)

    const onChange = () => {
        setChecked(!checked)
    };

    const confirm = () => {
        message.success('To do deleted');
        handleDelete(_id)
      };

    return(
            <Row>
                <Col span={21}>
                    <Checkbox onChange={onChange} checked={checked} className={styles.todo}>
                        <p className={checked ? styles.check : ''}>{title}</p>
                    </Checkbox>
                </Col>
                <Col span={3} className={styles.icons}>
                <Popconfirm
                    title="Delete to do"
                    description="Are you sure to delete this to do?"
                    onConfirm={confirm}
                    placement="right"
                    okText="Delete"
                    cancelText="Cancel"
                >
                    <DeleteFilled className={styles.icon}/>
                </Popconfirm>
                </Col>
            </Row>
    )
}

export default ToDoItem