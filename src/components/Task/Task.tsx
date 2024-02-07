import React, { FC, useState } from 'react';
import styles from './Task.module.css'
import { ITaskWithCategory } from '../../interfaces/interfaces';
import EditTaskModal from '../EditTaskModal/EditTaskModal';
import DeleteTaskModal from '../DeleteTaskModal/DeleteTaskModal';
import ListItem from '../ListItem/ListItem';
import ListItemNameText from '../ListItemNameText/ListItemNameText';
import ListItemDescriptionText from '../ListItemDescriptionText/ListItemDescriptionText';

export interface TaskProps {
    task: ITaskWithCategory;
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
            <ListItem onEdit={openEditModalHandler} onDelete={openDeleteModalHandler}>
                <div className={styles.container}>
                    <ListItemNameText text={task.name}/>
                    {
                        task.categoryName &&
                            <div className={styles.categoryContainer}>
                                <div className={styles.directory} />
                                <p title={task.categoryName} className={styles.categoryName}>{task.categoryName}</p>
                            </div>
                    }
                </div>
                <ListItemDescriptionText text={task.description}/>          
            </ListItem>
            <EditTaskModal
                isOpened={isOpenedEditTaskModal}
                onClose={closeEditModalHandler}
                task={task}
            />
            <DeleteTaskModal
                isOpened={isOpenedDeleteTaskModal}
                onClose={closeDeleteModalHandler}
                task={task}
            />
        </>
    );
};

export default Task;
