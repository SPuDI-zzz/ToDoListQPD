import React, { FC } from 'react';
import styles from './ListItemNameText.module.css'

interface ListItemNameTextProps {
    text: string;
}

const ListItemNameText:FC<ListItemNameTextProps> = ({text}) => {
    return (
        <p title={text} className={styles.name}>{text}</p>
    );
};

export default ListItemNameText;
