import React, { DetailedHTMLProps, FC, PropsWithChildren } from 'react';
import styles from './Label.module.css'

interface LabelProps extends DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
    required?: boolean;
}

const Label:FC<PropsWithChildren<LabelProps>> = ({children, required, className = '', ...props}) => {
    return (
        <label {...props} className={`${styles.label} ${className}`}>
            {children} 
            {required &&
                <span className={styles.require}>*</span>
            }
        </label>
    );
};

export default Label;
