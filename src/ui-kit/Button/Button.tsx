import React, { DetailedHTMLProps, FC, PropsWithChildren } from 'react';
import styles from './Button.module.css'

interface ButtonProps extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: 'primary' | 'outlined'
}

const Button:FC<PropsWithChildren<ButtonProps>> = ({
    children,
    className = '',
    variant = 'primary',
    ...props
}) => {
    return (
        <button 
            {...props}
            className={`${variant === 'primary' ? styles.btnPrimary : styles.btnOutlined} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
