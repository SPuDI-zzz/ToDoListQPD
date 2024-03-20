import React, { FC } from 'react';
import styles from './ListItemDescriptionText.module.css'

interface ListItemDescriptionTextProps {
    text: string;
}

const ListItemDescriptionText:FC<ListItemDescriptionTextProps> = ({text}) => {
    return (
        <p title={text} className={styles.description}>{text}</p>
    );
};

export default ListItemDescriptionText;
