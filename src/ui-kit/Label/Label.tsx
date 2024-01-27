import React, { FC, PropsWithChildren } from 'react';
import styles from './Label.module.css'

interface LabelProps {
    required?: boolean;
    className?: string
}

const Label:FC<PropsWithChildren<LabelProps>> = ({children, required, className = ''}) => {
    return (
        <label className={`${styles.label} ${className}`}>
            {children} 
            {required &&
                <span className={styles.require}>*</span>
            }
        </label>
    );
};

export default Label;
