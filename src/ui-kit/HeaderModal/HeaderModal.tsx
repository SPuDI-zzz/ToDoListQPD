import React, { FC } from 'react';
import styles from './HeaderModal.module.css'

interface HeaderModalProps {
    headerText:string;
    closeHandler: () => void;
}

const HeaderModal:FC<HeaderModalProps> = ({headerText, closeHandler}) => {
    return (
        <div className={styles.container}>
            <p className={styles.headerText}>{headerText}</p>
            <div onClick={closeHandler} className={styles.close}></div>
        </div>
    );
};

export default HeaderModal;
