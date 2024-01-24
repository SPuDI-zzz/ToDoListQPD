import React, { ChangeEvent, FC, useEffect, useRef } from 'react';
import styles from './TextAreaWithLabel.module.css'

interface TextAreaWithLabelProps {
    placeholder:string;
    value: string;
    onChange: (e:ChangeEvent<HTMLTextAreaElement>) => void;
    errorMessage?: string
    name?: string;
    labelText?: string;
}

const PADDING_TOP = 9;

const MAX_HEIGHT = 490;

const TextAreaWithLabel:FC<TextAreaWithLabelProps> = ({
    placeholder,
    value,
    onChange,
    errorMessage,
    name,
    labelText
}) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const autoResizeTextArea = () => {
        const current = textAreaRef.current;
        if (!current)
            return;

        current.style.height = "auto";
        const scrollHeight = current.scrollHeight;

         current.style.height = scrollHeight < MAX_HEIGHT ? 
            scrollHeight - PADDING_TOP + "px" :
            MAX_HEIGHT - PADDING_TOP + "px";
    };

    useEffect(autoResizeTextArea, [value]);

    return (
        <div className={styles.inputBox}>
            <label className={styles.label}>{labelText}</label>
            <div className={styles.description}>
                <textarea
                    ref={textAreaRef}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={styles.descriptionTextArea} 
                />
            </div>
            <p className={styles.error}>{errorMessage}</p>
        </div>
    );
};

export default TextAreaWithLabel;
