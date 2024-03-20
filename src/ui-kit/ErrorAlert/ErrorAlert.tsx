import React, { FC } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import styles from './ErrorAlert.module.css'

interface ErrorAlertProps {
    message?: string;
    className?: string;
}

const ErrorAlert:FC<ErrorAlertProps> = ({message, className = ''}) => {
    return (
        <>
            {message &&
                <ErrorMessage className={`${styles.error} ${className}`}>
                    {message}
                </ErrorMessage>
            }
        </>
    );
};

export default ErrorAlert;
