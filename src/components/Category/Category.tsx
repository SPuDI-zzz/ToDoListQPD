import React, { FC } from 'react';
import styles from './Category.module.css'
import { ICategory } from '../../interfaces/interfaces';
import { useActions } from '../../hooks/useActions';

export interface TCategoryProps {
    category: ICategory;
}

const Category:FC<TCategoryProps> = ({category}) => {
    const {setEditCategoryModal, setDeleteCategoryModal} = useActions();

    const editHandler = () => setEditCategoryModal(category);

    const deleteHandler = () => setDeleteCategoryModal(category);

    return (
        <div className={styles.container}>
            <div className={styles.leftBlock}>
                <div className={styles.categoryContainer}>
                    <div className={styles.category}>
                        <p title={category.name} className={styles.categoryName}>{category.name}</p>
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
