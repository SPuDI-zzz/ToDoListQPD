import React, { ChangeEvent, FC } from 'react';
import TextArea from '../../ui-kit/TextArea/TextArea';
import Label from '../../ui-kit/Label/Label';

interface TextAreaWithLabelProps {
    placeholder:string;
    value: string;
    onChange: (e:ChangeEvent<HTMLTextAreaElement>) => void;
    errorMessage?: string
    name?: string;
    labelText?: string;
}

const TextAreaWithLabel:FC<TextAreaWithLabelProps> = ({
    placeholder,
    value,
    onChange,
    errorMessage,
    name,
    labelText
}) => {
    return (
        <TextArea
            placeholder={placeholder} 
            value={value} 
            onChange={onChange}
            errorMessage={errorMessage}
            name={name}
        >
            <Label>{labelText}</Label>
        </TextArea>
    );
};

export default TextAreaWithLabel;
