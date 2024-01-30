import React, { FC, PropsWithChildren } from 'react';
import OverlayingPopup from '../OverlayingPopup/OverlayingPopup';
import HeaderModal from '../HeaderModal/HeaderModal';
import styles from './MainPopup.module.css'

interface MainPopupProps {
    isOpened: boolean;
    onClose: () => void;
    headerText: string;
}

const MainPopup:FC<PropsWithChildren<MainPopupProps>> = ({children, isOpened, onClose, headerText}) => {
    return (
        <OverlayingPopup isOpened={isOpened} onClose={onClose}>
            <div className={styles.container}>
                <HeaderModal headerText={headerText} closeHandler={onClose}/>
                {children}
            </div>
        </OverlayingPopup>
    );
};

export default MainPopup;
