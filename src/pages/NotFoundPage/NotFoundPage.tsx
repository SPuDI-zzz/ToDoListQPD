import React from 'react';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import NotFound from '../../components/NotFound/NotFound';

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
