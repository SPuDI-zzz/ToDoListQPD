import React, { ChangeEvent, FC, HTMLInputTypeAttribute } from 'react';
import styles from './InputWithLabel.module.css'

interface InputWithLabelProps {
    name?: string;
    placeholder?: string;
    value: string;
    labelText?: string;
    required?: boolean;
    type?: HTMLInputTypeAttribute;
    onChange: (e:ChangeEvent<HTMLInputElement>) => void;
    errorMessage?: string;
}

const InputWithLabel:FC<InputWithLabelProps> = ({name, placeholder, value, onChange, labelText, required, type, errorMessage}) => {
    return (
        <div className={styles.inputBox}>
            <label className={styles.label}>
                {labelText} 
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
