import React from 'react';
import { ListProps } from '../../interfaces/interfaces';

export default function List<T>(props: ListProps<T>) {
    return (
        <>
            {props.items.map(props.renderItem)}
        </>
    );
};
