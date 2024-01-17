import React, { ChangeEvent, FC } from 'react';
import styles from './TextAreaModal.module.css'

interface TextAreaModalProps {
    placeholder:string;
    value: string;
    onChange: (e:ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaModal:FC<TextAreaModalProps> = ({placeholder, value, onChange}) => {
    return (
        <div className={styles.inputBox}>
            <label className={styles.label}>Описание</label>
            <div className={styles.description}>
                <textarea 
                    maxLength={1536}
                    name='description'
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={styles.descriptionTextArea} 
                />
            </div>
        </div>
    );
};

export default TextAreaModal;
