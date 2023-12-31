import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';

const NotFoundPage = () => {
    return (
        <>
            <Header />
            <Main>
                <NotFound />
            </Main>
        </>
    );
};

export default NotFoundPage;
