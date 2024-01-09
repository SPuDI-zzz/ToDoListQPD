import React, { FC } from 'react';
import { TaskProps } from '../../interfaces/interfaces';
import styles from './Task.module.css'

const Task: FC<TaskProps> = ({task}) => {
    return (
        <div className={styles.container}>
            <div className={styles.leftBlock}>
                <div className={styles.taskContainer}>
                    <div className={styles.task}>
                        <p className={styles.taskName}>{task.name}</p>
                    </div>
                    {
                        task.categoryName ?
                            <div className={styles.category}>
                                <div className={styles.directory} />
                                <p className={styles.categoryName}>{task.categoryName}</p>
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