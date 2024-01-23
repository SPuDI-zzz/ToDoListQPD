import React, { FC, PropsWithChildren } from 'react';
import Portal from '../Portal/Portal';
import styles from './OverlayingPopup.module.css'

interface OverlayingPopupProps {
    onClose: () => void;
    isOpened: boolean;
}

const OverlayingPopup:FC<PropsWithChildren<OverlayingPopupProps>> = ({children, isOpened, onClose}) => {
    if(!isOpened) {
        return null;
    }
    
    return (
        <Portal>
            <div className={styles.container} role='dialog'>
                <div
                    className={styles.overlay}
                    onClick={onClose}
                />
                {children}
            </div>
        </Portal>
    );
};

export default OverlayingPopup;