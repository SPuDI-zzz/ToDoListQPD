import React, { FC, PropsWithChildren, useEffect } from 'react';
import Portal from '../Portal/Portal';
import styles from './OverlayingPopup.module.css'

interface OverlayingPopupProps {
    onClose: () => void;
    isOpened: boolean;
}

const OverlayingPopup:FC<PropsWithChildren<OverlayingPopupProps>> = ({children, isOpened, onClose}) => {
    useEffect(() => {
        isOpened ? 
            document.body.style.overflow = 'hidden' :
            document.body.style.overflow = 'auto';

        return () => {
            document.body.style.overflow = 'auto'
        };
    }, [isOpened]);

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
