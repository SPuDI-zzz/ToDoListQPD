import React, { DetailedHTMLProps, FC, useEffect, useRef } from 'react';
import styles from './TextArea.module.css'
import Label from '../Label/Label';

interface TextAreaProps extends DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    value?: string;
    labelText?: string;
    error?: boolean;
    helperText?: string;
}

const PADDING_TOP = 9;

const MAX_HEIGHT = 490;

const useAutosizeTextArea = (
    textAreaRef: HTMLTextAreaElement | null,
    value?: string
) => {
    useEffect(() => {
        if (!textAreaRef)
            return;

        textAreaRef.style.height = "auto";
        const scrollHeight = textAreaRef.scrollHeight;

        textAreaRef.style.height = scrollHeight < MAX_HEIGHT ? 
            scrollHeight - PADDING_TOP + "px" :
            MAX_HEIGHT - PADDING_TOP + "px";
    }, [textAreaRef, value]);
};

const TextArea:FC<TextAreaProps> = ({
    className = '',
    labelText,
    required,
    value,
    helperText,
    error,
    ...props
}) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useAutosizeTextArea(textAreaRef.current, value);

    return (
        <div className={styles.container}>
            <Label required={required}>{labelText}</Label>
            <textarea
                {...props}
                ref={textAreaRef}
                value={value}
                className={`${styles.textarea} ${className}`} 
            />
            {helperText && 
                <p className={`${styles.help} ${error ? styles.error : ''}`}>{helperText}</p>
            }
        </div>
    );
};

export default TextArea;
