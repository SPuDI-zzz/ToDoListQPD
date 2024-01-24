import React, { FC } from 'react';
import styles from './TaskModal.module.css'
import { ITaskRequest, SelectOption } from '../../interfaces/interfaces';
import Select from '../Select/Select';
import MainPopup from '../../ui-kit/MainPopup/MainPopup';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useGetCategoriesQuery } from '../../app/services/categories.api';
import { MAX_LENGTH_TASK_DESCRIPTION, MAX_LENGTH_TASK_NAME } from '../../constants/constants';
import InputWithLabel from '../../ui-kit/InputWithLabel/InputWithLabel';
import TextAreaWithLabel from '../../ui-kit/TextAreaWithLabel/TextAreaWithLabel';
import ModalButtonsContainer from '../ModalButtonsContainer/ModalButtonsContainer';
import PrimaryButton from '../../ui-kit/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../ui-kit/SecondaryButton/SecondaryButton';

interface TaskModalProps {
    headerText: string;
    task: ITaskRequest;
    btnSubmitText: string;
    btnCancelText: string;
    onFormSubmit: (task: ITaskRequest) => Promise<void>;
    isOpened: boolean;
    onClose: () => void;
}

const TaskModal:FC<TaskModalProps> = ({
    headerText,
    task,
    btnSubmitText,
    onFormSubmit,
    btnCancelText,
    isOpened,
    onClose
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
    const { data: categories } = useGetCategoriesQuery();

    const options = categories?.map<SelectOption>(category => (
        {label: category.name, value: category.id}
    ));

    const getValue = (value?: number) => {
        return value ? 
            options?.find(option => option.value === value) : 
            undefined;
    };

    const onSubmit:SubmitHandler<ITaskRequest> = (data) => {
        onFormSubmit(data)
            .then(onClose);
    }

    return (
        <MainPopup onClose={onClose} isOpened={isOpened} headerText={headerText}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
                <div className={styles.containerBlock}>
                    <Controller
                        control={control}
                        name='name'
                        rules={{
                            required: 'Имя обязательно!',
                            maxLength: {
                                value: MAX_LENGTH_TASK_NAME,
                                message: `Имя должно быть меньше ${MAX_LENGTH_TASK_NAME}!`
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
                            message: `Описание должно быть меньше ${MAX_LENGTH_TASK_DESCRIPTION}!`
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
                <ModalButtonsContainer>
                    <PrimaryButton type='submit'>{btnSubmitText}</PrimaryButton>
                    <SecondaryButton type='button' onClick={onClose}>{btnCancelText}</SecondaryButton>
                </ModalButtonsContainer>
            </form>
        </MainPopup>
    );
};

export default TaskModal;
