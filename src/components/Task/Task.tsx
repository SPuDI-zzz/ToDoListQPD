import React, { FC } from 'react';
import styles from './Task.module.css'
import { ITask } from '../../interfaces/interfaces';
import { useDispatch } from 'react-redux';
import { setDeleteTaskModal, setEditTaskModal } from '../../features/modals/modals.slice';

export interface TaskProps {
    task: ITask;
}

const Task: FC<TaskProps> = ({task}) => {
    const dispatch = useDispatch();

    const editHandler = () => {
        dispatch(setEditTaskModal(task));
    }

    const deleteHandler = () => {
        dispatch(setDeleteTaskModal(task));
    }

    return (
        <div className={styles.container}>
            <div className={styles.leftBlock}>
                <div className={styles.taskContainer}>
                    <div className={styles.task}>
                        <p title={task.name} className={styles.taskName}>{task.name}</p>
                    </div>
                    {
                        task.categoryName &&
                            <div className={styles.category}>
                                <div className={styles.directory} />
                                <p title={task.categoryName} className={styles.categoryName}>{task.categoryName}</p>
                            </div>
                    }
                </div>
                <div className={styles.description}>
                    <p title={task.description} className={styles.descriptionText}>{task.description}</p>
                </div>
            </div>
            <div className={styles.rightBlock}>
                <button 
                    type='button'
                    onClick={editHandler}
                    className={styles.btnEdit}>        
                </button>
                <button 
                    type='button'
                    onClick={deleteHandler}
                    className={styles.btnDelete}>
                </button>
            </div>
        </div>
    );
};

export default Task;