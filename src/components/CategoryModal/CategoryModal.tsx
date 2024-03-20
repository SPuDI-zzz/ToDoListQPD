import React, { FC, useEffect } from 'react';
import styles from './CategoryModal.module.css';
import { ICategory } from '../../interfaces/interfaces';
import MainPopup from '../../ui-kit/MainPopup/MainPopup';
import { Controller, useForm } from 'react-hook-form';
import { MAX_LENGTH_CATEGORY_DESCRIPTION, MAX_LENGTH_CATEGORY_NAME } from '../../constants/constants';
import ModalButtonsContainer from '../../ui-kit/ModalButtonsContainer/ModalButtonsContainer';
import Button from '../../ui-kit/Button/Button';
import ErrorAlert from '../../ui-kit/ErrorAlert/ErrorAlert';
import Input from '../../ui-kit/Input/Input';
import TextArea from '../../ui-kit/TextArea/TextArea';

interface CategoryModalProps {
    headerText: string;
    defaultValues?: ICategory;
    btnSubmitText: string;
    btnCancelText: string;
    onFormSubmit: (task: ICategory) => void;
    isOpened: boolean;
    onClose: () => void;
    errorMessage?: string;
    isLoading?: boolean;
}

const CategoryModal:FC<CategoryModalProps> = ({
    headerText,
    defaultValues,
    btnSubmitText,
    btnCancelText,
    onFormSubmit,
    isOpened,
    onClose,
    errorMessage,
    isLoading,
}) => {
    const {
        handleSubmit,
        control,
        reset
    } = useForm<ICategory>({
        mode: 'onChange',
        defaultValues: defaultValues
    });

    useEffect(() => {
        if (!isOpened)
            reset();
    }, [isOpened, reset]);

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
                        <Input 
                            required={true}
                            labelText={'Имя'}
                            placeholder='Введите имя категории'
                            value={value}
                            onChange={newValue => onChange(newValue)}
                            error={Boolean(error)}
                            helperText={error && error.message}
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
                        <TextArea
                            labelText='Описание' 
                            placeholder='Введите описание категории' 
                            value={value} 
                            onChange={newValue => onChange(newValue)}
                            error={Boolean(error)}
                            helperText={error && error.message}                         
                        >
                        </TextArea>
                    )}
                />
                <ErrorAlert message={errorMessage}/>
                <ModalButtonsContainer>
                    <Button isLoading={isLoading} type='submit'>{btnSubmitText}</Button>
                    <Button isLoading={isLoading} variant='outlined' type='button' onClick={onClose}>{btnCancelText}</Button>
                </ModalButtonsContainer>
            </form>
        </MainPopup>
    );
};

export default CategoryModal;
