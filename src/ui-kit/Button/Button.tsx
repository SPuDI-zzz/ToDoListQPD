import React, { FC, PropsWithChildren } from 'react';
import styles from './Button.module.css'

interface ButtonProps {
    type?: 'submit' | 'button';
    className?: string;
    onClick?: () => void;
    variant?: 'primary' | 'outlined'
}

const Button:FC<PropsWithChildren<ButtonProps>> = ({
    children,
    className = '',
    type,
    variant = 'primary',
    onClick
}) => {
    return (
        <button 
            onClick={onClick}
            type={type}
            className={`${variant === 'primary' ? styles.btnPrimary : styles.btnOutlined} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
