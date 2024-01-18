import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import styles from './TaskModal.module.css'
import { ITaskRequest, SelectOption } from '../../interfaces/interfaces';
import Select from '../Select/Select';
import HeaderModal from '../HeaderModal/HeaderModal';
import InputNameModal from '../InputNameModal/InputModal';
import TextAreaModal from '../TextAreaModal/TextAreaModal';
import { useActions } from '../../hooks/useActions';
import { useCategories } from '../../hooks/useCategories';

interface TaskModalProps {
    headerText: string;
    task: ITaskRequest;
    setTask: (value: React.SetStateAction<ITaskRequest>) => void;
    btnSubmitText: string;
    onFormSubmit: (task: ITaskRequest) => Promise<void>;
}

const TaskModal:FC<TaskModalProps> = ({headerText, task, setTask, btnSubmitText, onFormSubmit}) => {
    const [selectValue, setSelectValue] = useState<SelectOption | undefined>(undefined);
    const { categories } = useCategories();
    const { closeModal } = useActions();

    const closeHandler = () => closeModal();

    useEffect(() => {
        if (task.categoryId && categories) {
            const categoryName = categories.find(category => category.id === task.categoryId)?.name;
            
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

    const submitHandler = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onFormSubmit(task)
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
        <div className={styles.body}>
            <form onSubmit={submitHandler} className={styles.container}>
                <div className={styles.fullContainer}>
                    <HeaderModal
                        headerText={headerText}
                        closeHandler={closeHandler}
                    />
                </div>
                <div className={styles.halfContainer}>
                    <InputNameModal 
                        placeholder='Введите имя задачи'
                        value={task.name}
                        onChange={onChangeValue}
                    />
                </div>
                <div className={styles.halfContainer}>
                    <Select 
                        value={selectValue}
                        options={
                            categories?.map(category => (
                                {label: category.name, value: category.id}
                            ))
                        } 
                        onChange={onChangeSelect} 
                    />
                </div>
                <div className={styles.fullContainer}>
                    <TextAreaModal 
                        placeholder='Введите описание задачи' 
                        value={task.description} 
                        onChange={onChangeValue}                        
                    />
                </div>
                <div className={styles.actions}>
                    <button type='submit' className={styles.btnSubmit}>{btnSubmitText}</button>
                    <button type='button' className={styles.btnClose} onClick={closeHandler}>Закрыть</button>
                </div>
            </form>
        </div>
    );
};

export default TaskModal;
