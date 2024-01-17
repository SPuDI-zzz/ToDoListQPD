import React, { FC, FormEvent } from 'react';
import styles from './DeleteModal.module.css'
import { ICategoryRequest, ITaskRequest } from '../../interfaces/interfaces';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../features/modals/modals.slice';

interface DeleteModalProps {
    headerText: string;
    id: number;
    messageText: string
    onFormSubmit: (id: number) => Promise<void>;
}


const DeleteModal:FC<DeleteModalProps> = ({headerText, id, messageText, onFormSubmit}) => {
    const dispatch = useDispatch();

    const closeHandler = () => {
        dispatch(closeModal());
    }

    const submitHandler = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!id) {
            closeHandler();
            return;
        }

        onFormSubmit(id)
            .then(() => closeHandler());            
    }

    return (
        <div className={styles.body}>
            <form onSubmit={submitHandler} className={styles.container}>
                <div className={styles.fullContainer}>
                    <div className={styles.header}>
                        <p className={styles.headerText}>{headerText}</p>
                        <div onClick={closeHandler} className={styles.close}></div>
                    </div>
                </div>
                <div className={styles.fullContainer}>
                    <p title={messageText} className={styles.messageText}>{messageText}</p>
                </div>
                <div className={styles.fullContainer}>
                    <div className={styles.actions}>
                        <button type='submit' className={styles.btnCreate}>Да</button>
                        <button type='button' className={styles.btnClose} onClick={closeHandler}>Нет</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default DeleteModal;
