import React, { FC, useState } from 'react';
import styles from './Select.module.css'
import { SelectOption } from '../../interfaces/interfaces';

interface SelectProps {
    options?: SelectOption[];
    value?: SelectOption;
    onChange: (value?: SelectOption) => void
}

const Select: FC<SelectProps> = ({value, options, onChange}) => {
    const [isOpen, setIsOpen] = useState(false);
    
    function selectOption(option: SelectOption) {
        option.value !== value?.value ? 
            onChange(option) :
            onChange(undefined);
    }

    function isOptionSelected(option?: SelectOption) {
        return option?.value === value?.value;
    }

    return (
        <div className={styles.container}>
            <label className={styles.label}>Категория</label>
            <div 
                tabIndex={0} 
                onBlur={() => setIsOpen(false)} 
                onClick={() => setIsOpen(prev => !prev)} 
                className={styles.select}
            >
                <span 
                    className={value ? styles.value: styles.placeholder}
                >
                    {value?.label ?? 'Выберите категорию'}
                </span>
                <ul className={`${styles.options} ${isOpen ? styles.show : ''}`}>
                    {options?.map(option => 
                        <li 
                            onClick={e => {
                                e.stopPropagation();
                                selectOption(option);
                                setIsOpen(false);
                            }}
                            key={option.value} 
                            className={`${styles.option} ${isOptionSelected(option) ? styles.selected : ''}`}
                        >
                            {option.label}
                        </li>
                    )}
                </ul>
                <button className={styles.dropDownArrow}></button>
            </div>
        </div>
    );
};

export default Select;
