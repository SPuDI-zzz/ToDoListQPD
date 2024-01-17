import React from 'react';
import { ITask } from '../../interfaces/interfaces';
import Task from '../Task/Task';
import { useGetTasksQuery } from '../../app/services/tasks.api';
import { useGetCategoriesQuery } from '../../app/services/categories.api';

const Tasks = () => {
    const {isLoading: isLoadingTasks, data: tasksResponse} = useGetTasksQuery();
    const {isLoading: isLoadingCategories, data: categoriesResponse} = useGetCategoriesQuery();

    const tasks = tasksResponse?.map(task=> {
        const categoryName = categoriesResponse?.find(category => category.id === task.categoryId)?.name;
                
        return {
            id: task.id,
            name: task.name,
            description: task.description,
            categoryId: task.categoryId,
            categoryName: categoryName,
        } as ITask
    });
    
    return (
        <>
            {isLoadingTasks || isLoadingCategories ? 
                <div>Loading...</div> :
                    tasks ? tasks.map(
                        task => 
                            <Task 
                                key={task.id} 
                                task={task}
                            />
                        ) :
                        ''
            }
        </>
    );
};

export default Tasks;
