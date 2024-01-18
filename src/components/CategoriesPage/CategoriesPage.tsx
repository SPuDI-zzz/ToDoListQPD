import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Categories from '../Categories/Categories';
import { MODAL_STATE } from '../../constants/constants';
import CreateCategory from '../CreateCategoryModal/CreateCategoryModal';
import EditCategory from '../EditCategoryModal/EditCategoryModal';
import DeleteCategory from '../DeleteCategoryModal/DeleteCategoryModal';
import { useActions } from '../../hooks/useActions';
import { useModals } from '../../hooks/useModals';

const modals = new Map<string, JSX.Element | null>([
    [MODAL_STATE.CREATE, <CreateCategory />],
    [MODAL_STATE.EDIT, <EditCategory />],
    [MODAL_STATE.DELETE, <DeleteCategory />],
    [MODAL_STATE.CLOSE, null],
]);

const CategoriesPage = () => {
    const { modalState } = useModals();
    const { setCreateCategoryModal } = useActions();

    const addCategoryHandler = () => setCreateCategoryModal();
    return (
        <>
            <Header buttonText='Добавить категорию' onButtonClick={addCategoryHandler}/>
            <Main>
                <Categories />
            </Main>
            {modals.get(modalState)}
        </>
    );
};

export default CategoriesPage;
