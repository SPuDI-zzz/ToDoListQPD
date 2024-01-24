import React, { FC, useState } from 'react';
import styles from './Task.module.css'
import { ITask } from '../../interfaces/interfaces';
import EditTaskModal from '../EditTaskModal/EditTaskModal';
import DeleteTaskModal from '../DeleteTaskModal/DeleteTaskModal';

export interface TaskProps {
    task: ITask;
}

const Task: FC<TaskProps> = ({task}) => {
    const [isOpenedEditTaskModal, setIsOpenedEditTaskModal] = useState(false);
    const [isOpenedDeleteTaskModal, setIsOpenedDeleteTaskModal] = useState(false);

    const openEditModalHandler = () => setIsOpenedEditTaskModal(true);
    const closeEditModalHandler = () => setIsOpenedEditTaskModal(false);

    const openDeleteModalHandler = () => setIsOpenedDeleteTaskModal(true);
    const closeDeleteModalHandler = () => setIsOpenedDeleteTaskModal(false);

    return (
        <>
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
                        onClick={openEditModalHandler}
                        className={styles.btnEdit}>        
                    </button>
                    <button 
                        type='button'
                        onClick={openDeleteModalHandler}
                        className={styles.btnDelete}>
                    </button>
                </div>
            </div>
            {isOpenedEditTaskModal && <EditTaskModal
                isOpened={isOpenedEditTaskModal}
                onClose={closeEditModalHandler}
                task={task}
            />}
            {isOpenedDeleteTaskModal && <DeleteTaskModal
                isOpened={isOpenedDeleteTaskModal}
                onClose={closeDeleteModalHandler}
                task={task}
            />}
        </>
    );
};

export default Task;
