import React, { FC } from 'react';
import CategoryModal from '../CategoryModal/CategoryModal';
import { useUpdateCategoryMutation } from '../../app/services/categories.api';
import { ICategoryRequest, ICategoryResponse } from '../../interfaces/interfaces';

interface EditCategoryModalProps {
    isOpened: boolean;
    onClose: () => void;
    category: ICategoryResponse;
}

const EditCategoryModal:FC<EditCategoryModalProps> = ({isOpened, category, onClose}) => {
    const [updateCategory] = useUpdateCategoryMutation();

    const updateCategoryHandler = async (category: ICategoryRequest) => {
        await updateCategory(category).unwrap();
    }
    
    return (
        <>
            {category &&
                <CategoryModal 
                    headerText={'Редактирование категории'}
                    category={category}
                    btnSubmitText={'Сохранить'}
                    btnCancelText={'Закрыть'}
                    onFormSubmit={updateCategoryHandler}
                    isOpened={isOpened}
                    onClose={onClose}                
                />
            }
        </>
    );
};

export default EditCategoryModal;
