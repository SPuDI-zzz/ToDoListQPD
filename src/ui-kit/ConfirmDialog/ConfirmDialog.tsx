import React, { FC, PropsWithChildren } from 'react';
import OverlayingPopup from '../OverlayingPopup/OverlayingPopup';
import HeaderModal from '../HeaderModal/HeaderModal';
import styles from './ConfirmDialog.module.css'
import ModalButtonsContainer from '../ModalButtonsContainer/ModalButtonsContainer';
import Button from '../Button/Button';

interface ConfirmDialogProps {
    isOpened: boolean;
    onCancel: () => void;
    headerText: string;
    onConfirm: () => void;
    messageText: string;
    btnConfirmText: string;
    btnCanselText:string;
    isLoading?:boolean;
}

const ConfirmDialog:FC<PropsWithChildren<ConfirmDialogProps>> = ({
    children,
    isOpened,
    onCancel,
    headerText,
    onConfirm,
    messageText,
    btnCanselText,
    btnConfirmText,
    isLoading,
}) => {
    return (
        <OverlayingPopup onClose={onCancel} isOpened={isOpened}>
            <div className={styles.container}>
                <HeaderModal headerText={headerText} closeHandler={onCancel} />
                <p title={messageText} className={styles.messageText}>{messageText}</p>
                {children}
                <ModalButtonsContainer>
                    <Button isLoading={isLoading} type='button' className={styles.btnConfirm} onClick={onConfirm}>{btnConfirmText}</Button>
                    <Button isLoading={isLoading} variant='outlined'  type='button' onClick={onCancel}>{btnCanselText}</Button>
                </ModalButtonsContainer>
            </div>
        </OverlayingPopup>
    );
};

export default ConfirmDialog;
