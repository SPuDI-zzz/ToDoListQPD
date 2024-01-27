import React, { ChangeEvent, FC, PropsWithChildren, useEffect, useRef } from 'react';
import styles from './TextArea.module.css'
import ErrorMessage from '../ErrorMessage/ErrorMessage';

interface TextAreaProps {
    placeholder:string;
    value: string;
    onChange: (e:ChangeEvent<HTMLTextAreaElement>) => void;
    errorMessage?: string
    name?: string;
    className?: string;
}

const PADDING_TOP = 9;

const MAX_HEIGHT = 490;

const useAutosizeTextArea = (
    textAreaRef: HTMLTextAreaElement | null,
    value: string
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

const TextArea:FC<PropsWithChildren<TextAreaProps>> = ({
    placeholder,
    value,
    onChange,
    errorMessage,
    name,
    children,
    className = '',
}) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useAutosizeTextArea(textAreaRef.current, value)

    return (
        <div className={styles.container}>
            {children}
            <textarea
                ref={textAreaRef}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`${styles.textarea} ${className}`} 
            />
            <ErrorMessage>{errorMessage}</ErrorMessage>
        </div>
    );
};

export default TextArea;
