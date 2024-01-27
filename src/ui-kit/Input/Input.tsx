import React, { ChangeEvent, FC, HTMLInputTypeAttribute, PropsWithChildren } from 'react';
import styles from './Input.module.css'
import ErrorMessage from '../ErrorMessage/ErrorMessage';

interface InputProps {
    name?: string;
    placeholder?: string;
    value: string;
    required?: boolean;
    type?: HTMLInputTypeAttribute;
    onChange: (e:ChangeEvent<HTMLInputElement>) => void;
    errorMessage?: string;
    className?: string;
}

const Input:FC<PropsWithChildren<InputProps>> = ({
    children,
    name,
    placeholder,
    value,
    onChange,
    type,
    errorMessage,
    className = '',
}) => {
    return (
        <div className={styles.container}>
            {children}
            <input 
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder} 
                type={type} 
                className={`${styles.input} ${className}`}
            />
            <ErrorMessage className={styles.error}>{errorMessage}</ErrorMessage>
        </div>
    );
};

export default Input;
