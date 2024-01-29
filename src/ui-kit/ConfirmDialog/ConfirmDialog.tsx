import React, { FC } from 'react';
import OverlayingPopup from '../OverlayingPopup/OverlayingPopup';
import HeaderModal from '../../components/HeaderModal/HeaderModal';
import styles from './ConfirmDialog.module.css'
import ErrorAlert from '../../components/ErrorAlert/ErrorAlert';
import ModalButtonsContainer from '../../components/ModalButtonsContainer/ModalButtonsContainer';
import Button from '../Button/Button';

interface ConfirmDialogProps {
    isOpened: boolean;
    onCansel: () => void;
    headerText: string;
    onConfirm: () => void;
    messageText: string;
    btnConfirmText: string;
    btnCanselText:string;
    errorMessage?: string;
}

const ConfirmDialog:FC<ConfirmDialogProps> = ({
    isOpened,
    onCansel,
    headerText,
    onConfirm,
    messageText,
    btnCanselText,
    btnConfirmText,
    errorMessage,
}) => {
    return (
        <OverlayingPopup onClose={onCansel} isOpened={isOpened}>
            <div className={styles.container}>
                <HeaderModal headerText={headerText} closeHandler={onCansel} />
                <p title={messageText} className={styles.messageText}>{messageText}</p>
                <ErrorAlert message={errorMessage}/>
                <ModalButtonsContainer>
                    <Button type='button' className={styles.btnConfirm} onClick={onConfirm}>{btnConfirmText}</Button>
                    <Button variant='outlined'  type='button' onClick={onCansel}>{btnCanselText}</Button>
                </ModalButtonsContainer>
            </div>
        </OverlayingPopup>
    );
};

export default ConfirmDialog;
