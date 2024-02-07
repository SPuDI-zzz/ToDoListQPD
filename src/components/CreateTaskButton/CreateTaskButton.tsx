import React, { useState } from 'react';
import styles from './CreateTaskButton.module.css'
import CreateTaskModal from '../CreateTaskModal/CreateTaskModal';

const CreateTaskButton = () => {
    const [isOpenedCreateTaskModal, setIsOpenedCreateTaskModal] = useState(false);

    const addTaskHandler = () => setIsOpenedCreateTaskModal(true);
    const onCloseModal = () => setIsOpenedCreateTaskModal(false);
    
    return (
        <>
            <button 
                type='button' 
                onClick={addTaskHandler}
                className={styles.btnPrimary}
            >
                {'Добавить задачу'}
            </button> 
            <CreateTaskModal 
                isOpened={isOpenedCreateTaskModal}
                onClose={onCloseModal} 
            /> 
        </>
    );
};

export default CreateTaskButton;
