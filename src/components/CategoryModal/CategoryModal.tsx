import React, { FC } from 'react';
import styles from './CategoryModal.module.css';
import { ICategoryRequest } from '../../interfaces/interfaces';
import MainPopup from '../../ui-kit/MainPopup/MainPopup';
import { Controller, useForm } from 'react-hook-form';
import InputWithLabel from '../InputWithLabel/InputWithLabel';
import { MAX_LENGTH_CATEGORY_DESCRIPTION, MAX_LENGTH_CATEGORY_NAME } from '../../constants/constants';
import TextAreaWithLabel from '../TextAreaWithLabel/TextAreaWithLabel';
import ModalButtonsContainer from '../ModalButtonsContainer/ModalButtonsContainer';
import PrimaryButton from '../../ui-kit/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../ui-kit/SecondaryButton/SecondaryButton';
import ErrorAlert from '../ErrorAlert/ErrorAlert';

interface CategoryModalProps {
    headerText: string;
    category: ICategoryRequest;
    btnSubmitText: string;
    btnCancelText: string;
    onFormSubmit: (task: ICategoryRequest) => Promise<void>;
    isOpened: boolean;
    onClose: () => void;
    errorMessage?: string;
}

const CategoryModal:FC<CategoryModalProps> = ({
    headerText,
    category,
    btnSubmitText,
    btnCancelText,
    onFormSubmit,
    isOpened,
    onClose,
    errorMessage,
}) => {
    const {
        handleSubmit,
        control,
    } = useForm<ICategoryRequest>({
        mode: 'onChange',
        defaultValues: {
            id: category.id,
            name: category.name,
            description: category.description,
        }
    });

    return (
        <MainPopup onClose={onClose} isOpened={isOpened} headerText={headerText}>
            <form onSubmit={handleSubmit(onFormSubmit)} className={styles.container}>                
                <Controller
                    control={control}
                    name='name'
                    rules={{
                        required: 'Имя обязательно!',
                        maxLength: {
                            value: MAX_LENGTH_CATEGORY_NAME,
                            message: `Имя должно быть меньше ${MAX_LENGTH_CATEGORY_NAME} знаков!`
                        }
                    }}
                    render={({field: {onChange, value}, fieldState: {error}}) => (
                        <InputWithLabel 
                            errorMessage={error?.message}
                            required={true}
                            labelText={'Имя'}
                            placeholder='Введите имя категории'
                            value={value}
                            onChange={newValue => onChange(newValue)}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name='description'
                    rules={{
                        maxLength: {
                            value: MAX_LENGTH_CATEGORY_DESCRIPTION,
                            message: `Описание должно быть меньше ${MAX_LENGTH_CATEGORY_DESCRIPTION} знаков!`
                        }
                    }}
                    render={({field: {onChange, value}, fieldState: {error}}) => (
                        <TextAreaWithLabel
                            errorMessage={error?.message}
                            labelText='Описание' 
                            placeholder='Введите описание категории' 
                            value={value} 
                            onChange={newValue => onChange(newValue)}                        
                        />
                    )}
                />
                <ErrorAlert message={errorMessage}/>
                <ModalButtonsContainer>
                    <PrimaryButton type='submit'>{btnSubmitText}</PrimaryButton>
                    <SecondaryButton type='button' onClick={onClose}>{btnCancelText}</SecondaryButton>
                </ModalButtonsContainer>
            </form>
        </MainPopup>
    );
};

export default CategoryModal;
