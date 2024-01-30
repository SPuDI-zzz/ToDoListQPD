import React, { DetailedHTMLProps, FC, PropsWithChildren } from 'react';
import styles from './Input.module.css'
import Label from '../Label/Label';

interface InputProps extends DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    labelText?: string;
    value?: string;
    type?: 'text' | 'number' | 'email' | 'password';
    helperText?: string;
    error?: boolean;
}

const Input:FC<PropsWithChildren<InputProps>> = ({
    children,
    labelText,
    required,
    className = '',
    helperText,
    error,
    ...props
}) => {
    return (
        <div className={styles.container}>
            <Label required={required}>{labelText}</Label>
            <input 
                {...props}
                required={required}
                className={`${styles.input} ${className}`}
            />
            {helperText && 
                <p className={`${styles.help} ${error ? styles.error : ''}`}>{helperText}</p>
            }
        </div>
    );
};

export default Input;
