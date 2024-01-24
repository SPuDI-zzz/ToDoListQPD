import React, { FC, useState } from 'react';
import styles from './Category.module.css'
import { ICategory } from '../../interfaces/interfaces';
import EditCategoryModal from '../EditCategoryModal/EditCategoryModal';
import DeleteCategoryModal from '../DeleteCategoryModal/DeleteCategoryModal';

export interface TCategoryProps {
    category: ICategory;
}

const Category:FC<TCategoryProps> = ({category}) => {
    const [isOpenedEditCategoryModal, setIsOpenedEditCategoryModal] = useState(false);
    const [isOpenedDeleteCategoryModal, setIsOpenedDeleteCategoryModal] = useState(false);

    const openEditModalHandler = () => setIsOpenedEditCategoryModal(true);
    const closeEditModalHandler = () => setIsOpenedEditCategoryModal(false);

    const openDeleteModalHandler = () => setIsOpenedDeleteCategoryModal(true);
    const closeDeleteModalHandler = () => setIsOpenedDeleteCategoryModal(false);

    return (
        <>
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
            {isOpenedEditCategoryModal && <EditCategoryModal
                isOpened={isOpenedEditCategoryModal}
                onClose={closeEditModalHandler}
                category={category}
            />}
            {isOpenedDeleteCategoryModal && <DeleteCategoryModal
                isOpened={isOpenedDeleteCategoryModal}
                onClose={closeDeleteModalHandler}
                category={category}
            />}
        </>
    );
};

export default Category;
