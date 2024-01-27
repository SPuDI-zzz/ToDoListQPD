import React, { FC, useState } from 'react';
import { ICategory } from '../../interfaces/interfaces';
import EditCategoryModal from '../EditCategoryModal/EditCategoryModal';
import DeleteCategoryModal from '../DeleteCategoryModal/DeleteCategoryModal';
import ListItem from '../ListItem/ListItem';
import ListItemNameText from '../ListItemNameText/ListItemNameText';
import ListItemDescriptionText from '../ListItemDescriptionText/ListItemDescriptionText';

export interface TCategoryProps {
    category: ICategory;
}

const Category:FC<TCategoryProps> = ({category}) => {
    const [isOpenedEditCategoryModal, setIsOpenedEditCategoryModal] = useState(false);
    const [isOpenedDeleteCategoryModal, setIsOpenedDeleteCategoryModal] = useState(false);

    const openEditModalHandler = () => setIsOpenedEditCategoryModal(true);
    const closeEditModalHandler = () => setIsOpenedEditCategoryModal(false);

    const openDeleteModalHandler = () => setIsOpenedDeleteCategoryModal(true);
    const closeDeleteModalHandler = () => setIsOpenedDeleteCategoryModal(false);

    return (
        <>
            <ListItem onEdit={openEditModalHandler} onDelete={openDeleteModalHandler}>
                <ListItemNameText text={category.name}/>
                <ListItemDescriptionText text={category.description}/>  
            </ListItem>
            {isOpenedEditCategoryModal && <EditCategoryModal
                isOpened={isOpenedEditCategoryModal}
                onClose={closeEditModalHandler}
                category={category}
            />}
            {isOpenedDeleteCategoryModal && <DeleteCategoryModal
                isOpened={isOpenedDeleteCategoryModal}
                onClose={closeDeleteModalHandler}
                category={category}
            />}
        </>
    );
};

export default Category;
