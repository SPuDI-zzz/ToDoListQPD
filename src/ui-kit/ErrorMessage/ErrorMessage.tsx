import React, { FC, PropsWithChildren } from 'react';
import styles from './ErrorMessage.module.css'

interface ErrorMessageProps {
    className?: string
}

const ErrorMessage:FC<PropsWithChildren<ErrorMessageProps>> = ({children, className = ''}) => {
    return (
        <p className={`${styles.error} ${className}`}>{children}</p>
    );
};

export default ErrorMessage;
