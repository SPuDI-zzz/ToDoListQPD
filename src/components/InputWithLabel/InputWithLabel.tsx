import React, { ChangeEvent, FC, HTMLInputTypeAttribute } from 'react';
import Input from '../../ui-kit/Input/Input';
import Label from '../../ui-kit/Label/Label';

interface InputWithLabelProps {
    name?: string;
    placeholder?: string;
    value: string;
    labelText?: string;
    required?: boolean;
    type?: HTMLInputTypeAttribute;
    onChange: (e:ChangeEvent<HTMLInputElement>) => void;
    errorMessage?: string;
}

const InputWithLabel:FC<InputWithLabelProps> = ({name, placeholder, value, onChange, labelText, required, type, errorMessage}) => {
    return (
        <Input 
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder} 
            type={type} 
            errorMessage={errorMessage}
        >
            <Label required={required}>{labelText}</Label>
        </Input>
    );
};

export default InputWithLabel;
