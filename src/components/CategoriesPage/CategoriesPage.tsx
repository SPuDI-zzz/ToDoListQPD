import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Categories from '../Categories/Categories';

const CategoriesPage = () => {
    const test = () => console.log('Button add clicked in categories');
    return (
        <>
            <Header buttonText='Добавить категорию' onButtonClick={test}/>
            <Main>
                <Categories />
            </Main>
        </>
    );
};

export default CategoriesPage;
