import React, { FormEvent, FormEventHandler, useState } from 'react';
import styles from './CreateTask.module.css'
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { closeModal } from '../../features/modals/modals.slice';
import Select from '../Select/Select';
import { ITaskRequest, SelectOption } from '../../interfaces/interfaces';
import { useAddTasksMutation } from '../../app/services/tasks.api';

const defaultTask = {
    id: undefined,
    name: '',
    description: '',
    categoryId: undefined
} as ITaskRequest

const CreateTask = () => {
    const [task, setTask] = useState<ITaskRequest>(defaultTask);
    const [value, setValue] = useState<SelectOption | undefined>(undefined);
    const [ createTask ] = useAddTasksMutation();
    const { categories } = useTypedSelector(state => state.categories);
    const dispatch = useDispatch();

    const closeHandler = () => {
        dispatch(closeModal());
    }

    const sumbitHandler = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        task.categoryId = value?.value;
        createTask(task);
    }

    return (
        <div className={styles.body}>
            <form onSubmit={sumbitHandler} className={styles.container}>
                <div className={styles.header}>
                    <p className={styles.headerText}>Создание задачи</p>
                    <div onClick={closeHandler} className={styles.close}></div>
                </div>
                <div className={styles.halfContainer}>
                    <div className={styles.inputBox}>
                        <label className={styles.label}>Имя<span className={styles.requireInput}>*</span></label>
                        <input 
                            value={task.name}
                            onChange={e => setTask({ ...task, name: e.currentTarget.value})}
                            placeholder='Введите имя задачи' 
                            type='text' 
                            className={styles.input}
                        />
                    </div>
                </div>
                <div className={styles.halfContainer}>
                    <Select 
                        value={value}
                        options={
                            categories?.map(category => (
                                {label: category.name, value: category.id}
                            ))
                        } 
                        onChange={option => setValue(option)} 
                    />
                </div>
                <div className={styles.fullContainer}>
                    <div className={styles.inputBox}>
                        <label className={styles.label}>Описание</label>
                        <textarea 
                            value={task.description}
                            onChange={e => setTask({ ...task, description: e.currentTarget.value})}
                            placeholder='Введите описание задачи'
                            className={styles.description} 
                        />
                    </div>
                </div>
                <div className={styles.fullContainer}>
                    <div className={styles.actions}>
                        <button type='submit' className={styles.btnCreate}>Создать</button>
                        <button type='button' className={styles.btnClose} onClick={closeHandler}>Закрыть</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;
