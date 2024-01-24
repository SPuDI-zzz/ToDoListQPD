import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Categories from '../../components/Categories/Categories';
import CreateCategoryModal from '../../components/CreateCategoryModal/CreateCategoryModal';

const CategoriesPage = () => {
    const [isOpenedCreateCategoryModal, setIsOpenedCreateCategoryModal] = useState(false);

    const addCategoryHandler = () => setIsOpenedCreateCategoryModal(true);
    const onCloseModal = () => setIsOpenedCreateCategoryModal(false);

    return (
        <>
            <Header buttonText='Добавить категорию' onButtonClick={addCategoryHandler}/>
            <Main>
                <Categories />
            </Main>
            {isOpenedCreateCategoryModal && <CreateCategoryModal 
                isOpened={isOpenedCreateCategoryModal}
                onClose={onCloseModal} 
            />}
        </>
    );
};

export default CategoriesPage;
