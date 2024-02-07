import React, { DetailedHTMLProps, FC, PropsWithChildren } from 'react';
import styles from './Button.module.css'

interface ButtonProps extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: 'primary' | 'outlined';
    isLoading?: boolean;
}

const Button:FC<PropsWithChildren<ButtonProps>> = ({
    children,
    className = '',
    variant = 'primary',
    isLoading,
    disabled,
    ...props
}) => {
    return (
        <button 
            {...props}
            disabled={disabled || isLoading}
            className={`${variant === 'primary' ? styles.btnPrimary : styles.btnOutlined} ${isLoading ? styles.loading : ''} ${className}`}
        >
            {isLoading &&
                <span className={`${isLoading ? styles.loadingSpinner : ''} `}></span>}
            {children}
        </button>
    );
};

export default Button;
