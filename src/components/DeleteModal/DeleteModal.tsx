import React, { FC, FormEvent, useEffect } from 'react';
import styles from './DeleteModal.module.css'
import HeaderModal from '../HeaderModal/HeaderModal';
import { useActions } from '../../hooks/useActions';

interface DeleteModalProps {
    headerText: string;
    id: number;
    messageText: string
    onFormSubmit: (id: number) => Promise<void>;
}


const DeleteModal:FC<DeleteModalProps> = ({headerText, id, messageText, onFormSubmit}) => {
    const { closeModal } = useActions();

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto'
        };
    }, []);

    const closeHandler = () => closeModal();

    const submitHandler = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onFormSubmit(id)
            .then(() => closeHandler());            
    }

    return (
        <div className={styles.body}>
            <form onSubmit={submitHandler} className={styles.container}>
                <div className={styles.fullContainer}>
                    <HeaderModal
                        headerText={headerText}
                        closeHandler={closeHandler}
                    />
                </div>
                <div className={styles.fullContainer}>
                    <p title={messageText} className={styles.messageText}>{messageText}</p>
                </div>
                <div className={styles.fullContainer}>
                    <div className={styles.actions}>
                        <button type='submit' className={styles.btnSubmit}>Да</button>
                        <button type='button' className={styles.btnClose} onClick={closeHandler}>Нет</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default DeleteModal;
