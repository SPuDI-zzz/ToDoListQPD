import React, { useState } from 'react';
import styles from './CreateCategoryButton.module.css'
import CreateCategoryModal from '../CreateCategoryModal/CreateCategoryModal';

const CreateCategoryButton = () => {
    const [isOpenedCreateCategoryModal, setIsOpenedCreateCategoryModal] = useState(false);

    const addCategoryHandler = () => setIsOpenedCreateCategoryModal(true);
    const onCloseModal = () => setIsOpenedCreateCategoryModal(false);
    
    return (
        <>
            <button 
                type='button' 
                onClick={addCategoryHandler}
                className={styles.btnPrimary}
            >
                {'Добавить категорию'}
            </button> 
            <CreateCategoryModal 
                isOpened={isOpenedCreateCategoryModal}
                onClose={onCloseModal} 
            /> 
        </>
    ) 
};

export default CreateCategoryButton;
