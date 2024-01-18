import React, { useEffect, useState } from 'react';
import { ITask } from '../../interfaces/interfaces';
import Task from '../Task/Task';
import { useGetTasksQuery } from '../../app/services/tasks.api';
import { useGetCategoriesQuery } from '../../app/services/categories.api';

const Tasks = () => {
    const [tasks, setTasks] = useState<ITask[] | undefined>(undefined);
    const {isLoading: isLoadingTasks, data: tasksResponse} = useGetTasksQuery();
    const {isLoading: isLoadingCategories, data: categoriesResponse} = useGetCategoriesQuery();

    useEffect(() => {
        if (isLoadingTasks || isLoadingCategories)
            return;

        setTasks(tasksResponse?.map<ITask>(task => {
            const categoryName = task.categoryId ? 
                categoriesResponse?.find(category => category.id === task.categoryId)?.name : 
                undefined;
    
            return {
                id: task.id,
                name: task.name,
                description: task.description,
                categoryId: task.categoryId,
                categoryName: categoryName,
            } as ITask
        }));
    }, [tasksResponse, categoriesResponse, setTasks, isLoadingTasks, isLoadingCategories]);
    
    return (
        <>
            {isLoadingTasks || isLoadingCategories ? 
                <div>Loading...</div> :
                tasks?.map(task => 
                    <Task 
                        key={task.id} 
                        task={task}
                    />
                )
            }
        </>
    );
};

export default Tasks;
