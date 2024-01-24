import React, { FC, PropsWithChildren } from 'react';
import styles from './PrimaryButton.module.css'

interface PrimaryButtonProps {
    type?: 'submit' | 'button';
    className?: string;
    onClick?: () => void;
}

const PrimaryButton:FC<PropsWithChildren<PrimaryButtonProps>> = ({children, className, type, onClick}) => {
    return (
        <button 
            onClick={onClick}
            type={type}
            className={`${styles.btnPrimary} ${className}`}
        >
            {children}
        </button>
    );
};

export default PrimaryButton;
