import React, { ChangeEvent, FC } from 'react';
import styles from './InputModal.module.css'

interface InputNameModalProps {
    placeholder: string;
    value: string;
    onChange: (e:ChangeEvent<HTMLInputElement>) => void;
}

const InputNameModal:FC<InputNameModalProps> = ({placeholder, value, onChange}) => {
    return (
        <div className={styles.inputBox}>
            <label className={styles.label}>Имя<span className={styles.requireInput}>*</span></label>
            <input 
                required
                maxLength={255}
                name='name'
                value={value}
                onChange={onChange}
                placeholder={placeholder} 
                type='text' 
                className={styles.input}
            />
        </div>
    );
};

export default InputNameModal;
