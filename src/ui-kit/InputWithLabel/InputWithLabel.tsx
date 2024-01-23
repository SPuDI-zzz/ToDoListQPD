import React, { ChangeEvent, FC, HTMLInputTypeAttribute } from 'react';
import styles from './InputWithLabel.module.css'

interface InputWithLabelProps {
    name?: string;
    placeholder: string;
    value: string;
    label: string;
    required?: boolean;
    type?: HTMLInputTypeAttribute;
    onChange: (e:ChangeEvent<HTMLInputElement>) => void;
    errorMessage?: string;
}

const InputWithLabel:FC<InputWithLabelProps> = ({name, placeholder, value, onChange, label, required, type, errorMessage}) => {
    return (
        <div className={styles.inputBox}>
            <label className={styles.label}>
                {label} 
                {required &&
                    <span className={styles.requireInput}>*</span>
                }
            </label>
            <input 
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder} 
                type={type} 
                className={styles.input}
            />
            <p className={styles.error}>{errorMessage}</p>
        </div>
    );
};

export default InputWithLabel;