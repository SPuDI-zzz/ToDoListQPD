import React, { FC } from 'react';
import styles from './Category.module.css'
import { ICategory } from '../../interfaces/interfaces';
import { useDispatch } from 'react-redux';
import { setDeleteCategoryModal, setEditCategoryModal } from '../../features/modals/modals.slice';

export interface TCategoryProps {
    category: ICategory;
}

const Category:FC<TCategoryProps> = ({category}) => {
    const dispatch = useDispatch();

    const editHandler = () => {
        dispatch(setEditCategoryModal(category));
    }

    const deleteHandler = () => {
        dispatch(setDeleteCategoryModal(category));
    }

    return (
        <div className={styles.container}>
            <div className={styles.leftBlock}>
                <div className={styles.taskContainer}>
                    <div className={styles.task}>
                        <p title={category.name} className={styles.taskName}>{category.name}</p>
                    </div>
                </div>
                <div className={styles.description}>
                    <p title={category.description} className={styles.descriptionText}>{category.description}</p>
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

export default Category;
