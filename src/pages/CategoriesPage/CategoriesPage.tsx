import React from 'react';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Categories from '../../components/Categories/Categories';
import CreateCategoryButton from '../../components/CreateCategoryButton/CreateCategoryButton';

const CategoriesPage = () => {
    return (
        <>
            <Header>
                <CreateCategoryButton />
            </Header>
            <Main>
                <Categories />
            </Main>
        </>
    );
};

export default CategoriesPage;
