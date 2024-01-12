import React from 'react';
import styles from './CreateTask.module.css'
import { ICategory } from '../../interfaces/interfaces';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { closeModal } from '../../features/modals/modals.slice';


const CreateTask = () => {
    const { categories } = useTypedSelector(state => state.categories);
    const dispatch = useDispatch();

    const closeHandler = () => {
        dispatch(closeModal());
    }


    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.row1}>
                    <div className={styles.header}>
                        <p className={styles.headerText}>Создание задачи</p>
                        <div onClick={closeHandler} className={styles.close}></div>
                    </div>
                        <div className={styles.inputBox}>
                            <label className={styles.label}>Имя<span className={styles.requireInput}>*</span></label>
                            <input placeholder='Введите имя задачи' type='text' className={styles.input}/>
                        </div>
                        <div className={styles.inputBox}>
                            <label className={styles.label}>Категоря</label>
                            <select className={styles.input}>
                                {categories?.map((category) => 
                                    <option value={category.id}>{category.name}</option>
                                )}
                            </select>
                            {/* <input placeholder='Выберите категорию' type='text' className={styles.input}/> */}
                        </div>
                    
                    <div className={`${styles.inputBox}`}>
                        <label className={styles.label}>Описание</label>
                        <textarea placeholder='Введите описание задачи' className={`${styles.input} ${styles.description}`}></textarea>
                    </div> 
                    <div className={styles.actions}>
                        <button className={styles.btnCreate}>Создать</button>
                        <button className={styles.btnClose} onClick={closeHandler}>Закрыть</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateTask;
