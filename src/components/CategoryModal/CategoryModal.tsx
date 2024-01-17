import React, { ChangeEvent, FC, FormEvent, useEffect } from 'react';
import styles from './CategoryModal.module.css';
import HeaderModal from '../HeaderModal/HeaderModal';
import { ICategoryRequest } from '../../interfaces/interfaces';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../features/modals/modals.slice';
import InputNameModal from '../InputNameModal/InputModal';
import TextAreaModal from '../TextAreaModal/TextAreaModal';

interface CategoryModalProps {
    headerText: string;
    category: ICategoryRequest;
    setCategory: (value: React.SetStateAction<ICategoryRequest>) => void;
    btnSubmitText: string;
    onFormSubmit: (category: ICategoryRequest) => Promise<void>;
}

const CategoryModal:FC<CategoryModalProps> = ({headerText, category, setCategory, btnSubmitText, onFormSubmit}) => {
    const dispatch = useDispatch();

    const closeHandler = () => {
        dispatch(closeModal());
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto'
        };
    }, []);

    const submitHandler = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onFormSubmit(category)
            .then(() => closeHandler());
    }

    const onChangeValue = ({target}:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCategory({
            ...category, 
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
                <div className={styles.fullContainer}>
                    <InputNameModal 
                        placeholder='Введите имя категории'
                        value={category.name}
                        onChange={onChangeValue}
                    />
                </div>
                <div className={styles.fullContainer}>
                    <TextAreaModal 
                        placeholder='Введите описание категории' 
                        value={category.description} 
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

export default CategoryModal;
