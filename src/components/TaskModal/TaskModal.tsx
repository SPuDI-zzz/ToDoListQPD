import React, { FC, useEffect, useState } from 'react';
import styles from './TaskModal.module.css'
import { ITaskRequest, SelectOption } from '../../interfaces/interfaces';
import Select from '../Select/Select';
import MainPopup from '../../ui-kit/MainPopup/MainPopup';
import { Controller, useForm } from 'react-hook-form';
import { getCategories } from '../../app/services/categories.api';
import { MAX_LENGTH_TASK_DESCRIPTION, MAX_LENGTH_TASK_NAME } from '../../constants/constants';
import InputWithLabel from '../InputWithLabel/InputWithLabel';
import TextAreaWithLabel from '../TextAreaWithLabel/TextAreaWithLabel';
import ModalButtonsContainer from '../ModalButtonsContainer/ModalButtonsContainer';
import PrimaryButton from '../../ui-kit/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../ui-kit/SecondaryButton/SecondaryButton';
import ErrorAlert from '../ErrorAlert/ErrorAlert';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface TaskModalProps {
    headerText: string;
    task: ITaskRequest;
    btnSubmitText: string;
    btnCancelText: string;
    onFormSubmit: (task: ITaskRequest) => void;
    isOpened: boolean;
    onClose: () => void;
    errorMessage?: string;
}

const TaskModal:FC<TaskModalProps> = ({
    headerText,
    task,
    btnSubmitText,
    onFormSubmit,
    btnCancelText,
    isOpened,
    onClose,
    errorMessage,
}) => {
    const {
        handleSubmit,
        control,
    } = useForm<ITaskRequest>({
        mode: 'onChange',
        defaultValues: {
            id: task.id,
            name: task.name,
            description: task.description,
            categoryId: task.categoryId,
        }
    });
    const [categoriesErrorMessage, setCategoriesErrorMessage] = useState('');
    const [options, setOptions] = useState<SelectOption[] | undefined>(undefined);
    const {data : categories, isError} = getCategories.select()(useTypedSelector(state => state));

    useEffect(() => {
        if (isError) {
            setCategoriesErrorMessage('Не удалось получить данные по категориям!');
            return;
        }

        setOptions(categories?.map<SelectOption>(category => (
            {label: category.name, value: category.id}
        )));
    }, [categories, isError])

    const getValue = (value?: number) => {
        return value ? 
            options?.find(option => option.value === value) : 
            undefined;
    }

    return (
        <MainPopup onClose={onClose} isOpened={isOpened} headerText={headerText}>
            <form onSubmit={handleSubmit(onFormSubmit)} className={styles.container}>
                <div className={styles.containerBlock}>
                    <Controller
                        control={control}
                        name='name'
                        rules={{
                            required: 'Имя обязательно!',
                            maxLength: {
                                value: MAX_LENGTH_TASK_NAME,
                                message: `Имя должно быть меньше ${MAX_LENGTH_TASK_NAME} знаков!`
                            }
                        }}
                        render={({field: {onChange, value}, fieldState: {error}}) => (
                            <InputWithLabel 
                                errorMessage={error?.message}
                                required={true}
                                labelText={'Имя'}
                                placeholder='Введите имя задачи'
                                value={value}
                                onChange={newValue => onChange(newValue)}
                            />
                        )}
                    />
                    <Controller
                        name='categoryId'
                        control={control}
                        render={({field: {onChange, value}}) => (
                            <Select 
                                value={getValue(value)}
                                options={options} 
                                onChange={(newValue) => onChange(newValue?.value)} 
                            />
                        )}
                    />
                </div>
                <Controller
                    control={control}
                    name='description'
                    rules={{
                        maxLength: {
                            value: MAX_LENGTH_TASK_DESCRIPTION,
                            message: `Описание должно быть меньше ${MAX_LENGTH_TASK_DESCRIPTION} знаков!`
                        }
                    }}
                    render={({field: {onChange, value}, fieldState: {error}}) => (
                        <TextAreaWithLabel
                            errorMessage={error?.message}
                            labelText='Описание' 
                            placeholder='Введите описание задачи' 
                            value={value} 
                            onChange={newValue => onChange(newValue)}                        
                        />
                    )}
                />
                <div>
                    <ErrorAlert message={categoriesErrorMessage}/>
                    <ErrorAlert message={errorMessage}/>
                </div>
                <ModalButtonsContainer>
                    <PrimaryButton type='submit'>{btnSubmitText}</PrimaryButton>
                    <SecondaryButton type='button' onClick={onClose}>{btnCancelText}</SecondaryButton>
                </ModalButtonsContainer>
            </form>           
        </MainPopup>
    );
};

export default TaskModal;
