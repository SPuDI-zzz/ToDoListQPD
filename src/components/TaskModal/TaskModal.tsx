import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import styles from './TaskModal.module.css'
import { ITaskRequest, SelectOption } from '../../interfaces/interfaces';
import Select from '../Select/Select';

import TextAreaModal from '../TextAreaModal/TextAreaModal';
import { useActions } from '../../hooks/useActions';
import MainPopup from '../../ui-kit/MainPopup/MainPopup';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useGetCategoriesQuery } from '../../app/services/categories.api';
import { MAX_LENGTH_TASK_NAME } from '../../constants/constants';
import InputWithLabel from '../../ui-kit/InputWithLabel/InputWithLabel';

interface TaskModalProps {
    headerText: string;
    task: ITaskRequest;
    setTask: (value: React.SetStateAction<ITaskRequest>) => void;
    btnSubmitText: string;
    onFormSubmit: (task: ITaskRequest) => Promise<void>;
}

const TaskModal:FC<TaskModalProps> = ({headerText, task, setTask, btnSubmitText, onFormSubmit}) => {
    const [selectValue, setSelectValue] = useState<SelectOption | undefined>(undefined);
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
    const { closeModal } = useActions();

    const closeHandler = () => closeModal();

    const options = categories?.map(category => (
        {label: category.name, value: category.id}
    ))

    const getValue = (value?: number) => {
        return value ? 
            options?.find(option => option.value === value) : 
            undefined;
    }

    useEffect(() => {
        if (task.categoryId) {
            const categoryName = categories?.find(category => category.id === task.categoryId)?.name;
            
            categoryName &&
                setSelectValue({
                    value: task.categoryId, label: categoryName
                } as SelectOption);
        }

        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto'
        };
    }, [categories, task.categoryId]);

    const onSubmit:SubmitHandler<ITaskRequest> = (data) => {
        debugger;
        onFormSubmit(data)
            .then(() => closeHandler());
    }

    const onChangeValue = ({target}:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTask({
            ...task, 
            [target.name]: target.value
        });
    }

    const onChangeSelect = (option?: SelectOption) => {
        setTask({
            ...task, 
            categoryId: option?.value
        });

        setSelectValue(option);
    }

    return (
        <MainPopup onClose={closeHandler} isOpened={true} headerText={headerText}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
                <div className={styles.containerBlock}>
                    <Controller
                        control={control}
                        name='name'
                        rules={{
                            required: 'Name is required!',
                            maxLength: {
                                value: MAX_LENGTH_TASK_NAME,
                                message: `Name should be less than ${MAX_LENGTH_TASK_NAME}}`
                            }
                        }}
                        render={({field: {onChange, value}, fieldState: {error}}) => (
                            <>
                                <InputWithLabel 
                                    errorMessage={error?.message}
                                    required={true}
                                    label={'Имя'}
                                    placeholder='Введите имя задачи'
                                    value={value}
                                    onChange={newValue => onChange(newValue)}
                                />
                            </>
                        )}
                    />
                    <Controller
                        name='categoryId'
                        control={control}
                        render={({field: {onChange, value}}) => (
                            <>
                                <Select 
                                    value={getValue(value)}
                                    options={options} 
                                    onChange={(newValue) => onChange(newValue?.value)} 
                                />
                            </>
                        )}
                    />
                </div>
                <TextAreaModal 
                    placeholder='Введите описание задачи' 
                    value={task.description} 
                    onChange={onChangeValue}                        
                />
                <div className={styles.actions}>
                    <button type='submit' className={styles.btnSubmit}>{btnSubmitText}</button>
                    <button type='button' className={styles.btnClose} onClick={closeHandler}>Закрыть</button>
                </div>
            </form>
        </MainPopup>
    );
};

export default TaskModal;
