import React, { ChangeEvent, FC } from 'react';
import styles from './Input.module.css'
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Label from '../Label/Label';

interface InputProps {
    labelText?: string;
    required?: boolean;
    errorMessage?: string;
    className?: string;
    name?: string;
    placeholder?: string;
    value: string;
    type?: 'text' | 'number' | 'email' | 'password';
    onChange: (e:ChangeEvent<HTMLInputElement>) => void;
    readonly?: boolean;
    maxLength?: number;
    id?: string;
}

const Input:FC<InputProps> = ({
    labelText,
    required,
    errorMessage,
    className = '',
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
            <ErrorMessage className={styles.error}>{errorMessage}</ErrorMessage>
        </div>
    );
};

export default Input;
