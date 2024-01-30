import React, { FC, PropsWithChildren } from 'react';
import styles from './ModalButtonsContainer.module.css'

const ModalButtonsContainer:FC<PropsWithChildren> = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

export default ModalButtonsContainer;
