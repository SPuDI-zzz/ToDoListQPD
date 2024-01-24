import React, { FC } from 'react';
import OverlayingPopup from '../OverlayingPopup/OverlayingPopup';
import HeaderModal from '../../components/HeaderModal/HeaderModal';
import styles from './ConfirmDialog.module.css'

interface ConfirmDialogProps {
    isOpened: boolean;
    onCansel: () => void;
    headerText: string;
    onConfirm: () => void;
    messageText: string;
    btnConfirmText: string;
    btnCanselText:string;
}

const ConfirmDialog:FC<ConfirmDialogProps> = ({
    isOpened,
    onCansel,
    headerText,
    onConfirm,
    messageText,
    btnCanselText,
    btnConfirmText,
}) => {
    return (
        <OverlayingPopup onClose={onCansel} isOpened={isOpened}>
            <div className={styles.container}>
                <HeaderModal headerText={headerText} closeHandler={onCansel} />
                <p title={messageText} className={styles.messageText}>{messageText}</p>
                <div className={styles.actions}>
                    <button type='button' className={styles.btnSubmit} onClick={onConfirm}>{btnConfirmText}</button>
                    <button type='button' className={styles.btnCansel} onClick={onCansel}>{btnCanselText}</button>
                </div>
            </div>
        </OverlayingPopup>
    );
};

export default ConfirmDialog;
