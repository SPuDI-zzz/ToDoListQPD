import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { DEFAULT_CATEGORY } from '../../constants/constants';

const EditCategoryModal = () => {
    const { categories } = useTypedSelector(state => state.modals)
    const [category, setCategory] = useState<ICategoryRequest>(categories ?? DEFAULT_CATEGORY);
    const [createCategory] = useAddCategoryMutation();

    const createCategoryHandler = async (category: ICategoryRequest) => {
        await createCategory(category).unwrap();
    }
    
    return (
        <CategoryModal 
            headerText={'Создание категории'} 
            category={category}
            setCategory={setCategory}
            btnSubmitText={'Создать'}
            onFormSubmit={createCategoryHandler}
        />
    );
};

export default EditCategoryModal;
