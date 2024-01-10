import React, { FC } from 'react';
import styles from './Task.module.css'
import { ITask } from '../../interfaces/interfaces';

export interface TaskProps {
    task: ITask;
}

const Task: FC<TaskProps> = ({task}) => {
    return (
        <div className={styles.container}>
            <div className={styles.leftBlock}>
                <div className={styles.taskContainer}>
                    <div className={styles.task}>
                        <p title={task.name} className={styles.taskName}>{task.name}</p>
                    </div>
                    {
                        task.categoryName ?
                            <div className={styles.category}>
                                <div className={styles.directory} />
                                <p title={task.categoryName} className={styles.categoryName}>{task.categoryName}</p>
                            </div> :
                            ''
                    }
                </div>
                <div className={styles.description}>
                    <p title={task.description} className={styles.descriptionText}>{task.description}</p>
                </div>
            </div>
            <div className={styles.rightBlock}>
                <div className={styles.edit}></div>
                <div className={styles.delete}></div>
            </div>
        </div>
    );
};

export default Task;