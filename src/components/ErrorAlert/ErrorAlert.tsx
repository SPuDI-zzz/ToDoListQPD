import React, { FC } from 'react';
import styles from './ErrorAlert.module.css'
import ErrorMessage from '../../ui-kit/ErrorMessage/ErrorMessage';

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
