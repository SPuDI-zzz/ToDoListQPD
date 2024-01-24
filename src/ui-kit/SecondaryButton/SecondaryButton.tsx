import React, { FC, PropsWithChildren } from 'react';
import styles from './SecondaryButton.module.css'

interface SecondaryButtonProps {
    type?: 'button';
    className?: string;
    onClick?: () => void;
}

const SecondaryButton:FC<PropsWithChildren<SecondaryButtonProps>> = ({children, className, type, onClick}) => {
    return (
        <button 
            onClick={onClick}
            type={type}
            className={`${styles.btnSecondary} ${className}`}
        >
            {children}
        </button>
    );
};

export default SecondaryButton;
