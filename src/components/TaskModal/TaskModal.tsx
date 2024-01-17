import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import styles from './TaskModal.module.css'
import { useDispatch } from 'react-redux';
import { closeModal } from '../../features/modals/modals.slice';
import { ITaskRequest, SelectOption } from '../../interfaces/interfaces';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Select from '../Select/Select';
import HeaderModal from '../HeaderModal/HeaderModal';
import InputNameModal from '../InputNameModal/InputModal';
import TextAreaModal from '../TextAreaModal/TextAreaModal';

interface TaskModalProps {
    headerText: string;
    task: ITaskRequest;
    setTask: (value: React.SetStateAction<ITaskRequest>) => void;
    btnSubmitText: string;
    onFormSubmit: (task: ITaskRequest) => Promise<void>;
}

const TaskModal:FC<TaskModalProps> = ({headerText, task, setTask, btnSubmitText, onFormSubmit}) => {
    const [selectValue, setSelectValue] = useState<SelectOption | undefined>(undefined);
    const { categories } = useTypedSelector(state => state.categories);
    const dispatch = useDispatch();

    const closeHandler = () => {
        dispatch(closeModal());
    }

    useEffect(() => {
        if (task.categoryId && categories) {
            const categoryName = categories?.find(category => category.id === task.categoryId)?.name;
            
            categoryName &&
                setSelectValue({value: task.categoryId, label: categoryName});
        }

        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto'
        };
    }, []);

    const submitHandler = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        task.categoryId = selectValue?.value

        onFormSubmit(task)
            .then(() => closeHandler());
    }

    const onChangeValue = ({target}:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTask({
            ...task, 
            [target.name]: target.value
        });
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
                        onChange={option => setSelectValue(option)} 
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
                    <button type='submit' className={styles.btnCreate}>{btnSubmitText}</button>
                    <button type='button' className={styles.btnClose} onClick={closeHandler}>Закрыть</button>
                </div>
            </form>
        </div>
    );
};

export default TaskModal;
