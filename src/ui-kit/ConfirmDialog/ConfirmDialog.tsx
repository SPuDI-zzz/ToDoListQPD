import React, { FC } from 'react';
import OverlayingPopup from '../OverlayingPopup/OverlayingPopup';
import HeaderModal from '../../components/HeaderModal/HeaderModal';
import styles from './ConfirmDialog.module.css'
import ErrorAlert from '../../components/ErrorAlert/ErrorAlert';
import ModalButtonsContainer from '../../components/ModalButtonsContainer/ModalButtonsContainer';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import SecondaryButton from '../SecondaryButton/SecondaryButton';

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
                    <PrimaryButton type='button' className={styles.btnConfirm} onClick={onConfirm}>{btnConfirmText}</PrimaryButton>
                    <SecondaryButton onClick={onCansel}>{btnCanselText}</SecondaryButton>
                </ModalButtonsContainer>
            </div>
        </OverlayingPopup>
    );
};

export default ConfirmDialog;
