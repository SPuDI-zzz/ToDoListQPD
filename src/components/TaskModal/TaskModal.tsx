import React, { FC, useEffect } from 'react';
import styles from './TaskModal.module.css'
import { ITask } from '../../interfaces/interfaces';
import Select from '../Select/Select';
import MainPopup from '../../ui-kit/MainPopup/MainPopup';
import { Controller, useForm } from 'react-hook-form';
import { MAX_LENGTH_TASK_DESCRIPTION, MAX_LENGTH_TASK_NAME } from '../../constants/constants';
import ModalButtonsContainer from '../../ui-kit/ModalButtonsContainer/ModalButtonsContainer';
import Button from '../../ui-kit/Button/Button';
import ErrorAlert from '../../ui-kit/ErrorAlert/ErrorAlert';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Input from '../../ui-kit/Input/Input';
import TextArea from '../../ui-kit/TextArea/TextArea';
import { selectOptions } from '../../app/services/selectors/categories';

interface TaskModalProps {
    headerText: string;
    defaultValues?: ITask;
    btnSubmitText: string;
    btnCancelText: string;
    onFormSubmit: (task: ITask) => void;
    isOpened: boolean;
    onClose: () => void;
    errorMessage?: string;
    isLoading?: boolean;
}

const TaskModal:FC<TaskModalProps> = ({
    headerText,
    defaultValues,
    btnSubmitText,
    onFormSubmit,
    btnCancelText,
    isOpened,
    onClose,
    errorMessage,
    isLoading,
}) => {
    const {
        handleSubmit,
        control,
        reset,
    } = useForm<ITask>({
        mode: 'onChange',
        defaultValues: defaultValues,
    });
    
    useEffect(() => {
        if (!isOpened)
            reset();
    }, [isOpened, reset]);

    const {options, isError} = useTypedSelector(selectOptions);

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
                            <Input 
                                required={true}
                                labelText={'Имя'}
                                placeholder='Введите имя задачи'
                                value={value}
                                onChange={newValue => onChange(newValue)}
                                error={Boolean(error)}
                                helperText={error && error.message}
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
                                labelText='Категория'
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
                        <TextArea
                            labelText='Описание' 
                            placeholder='Введите описание задачи' 
                            value={value} 
                            onChange={newValue => onChange(newValue)} 
                            error={Boolean(error)}
                            helperText={error && error.message}                     
                        />  
                    )}
                />
                {(isError || errorMessage) &&
                    <div>
                        <ErrorAlert message={isError ? 'Не удалось получить данные по категориям!' : ''}/>
                        <ErrorAlert message={errorMessage}/>
                    </div>
                }
                <ModalButtonsContainer>
                    <Button isLoading={isLoading} type='submit'>{btnSubmitText}</Button>
                    <Button isLoading={isLoading} variant='outlined' type='button' onClick={onClose}>{btnCancelText}</Button>
                </ModalButtonsContainer>
            </form>           
        </MainPopup>
    );
};

export default TaskModal;
