import React from 'react';
import styles from './Nav.module.css'
import HeaderNavLink from '../../ui-kit/HeaderNavLink/HeaderNavLink';
import HeaderNavSeparator from '../../ui-kit/HeaderNavSeparator/HeaderNavSeparator';

const Nav = () => {
    return (
        <nav>
            <ul className={styles.links}>
                <HeaderNavLink navigateTo={'/tasks'} textLink={'Задачи'}/>
                <HeaderNavSeparator />
                <HeaderNavLink navigateTo={'/categories'} textLink={'Категории'}/>
            </ul>
        </nav>
    );
};

export default Nav;
