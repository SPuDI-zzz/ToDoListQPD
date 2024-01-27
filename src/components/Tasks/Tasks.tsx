import React, { useEffect, useState } from 'react';
import { ITask } from '../../interfaces/interfaces';
import Task from '../Task/Task';
import { useGetTasksQuery } from '../../app/services/tasks.api';
import { useGetCategoriesQuery } from '../../app/services/categories.api';
import ErrorAlert from '../ErrorAlert/ErrorAlert';

const Tasks = () => {
    const [tasks, setTasks] = useState<ITask[] | undefined>(undefined);
    const {isLoading: isLoadingTasks, data: tasksResponse, isError: isErrorTasks} = useGetTasksQuery();
    const {isLoading: isLoadingCategories, data: categoriesResponse, isError: isErrorCategories} = useGetCategoriesQuery();

    useEffect(() => {
        if (isLoadingTasks || isLoadingCategories || isErrorTasks)
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
            }
        }));
    }, [tasksResponse, categoriesResponse, setTasks, isLoadingTasks, isLoadingCategories, isErrorTasks]);

    return (
        <>
            {isLoadingTasks || isLoadingCategories ? 
                <div>Loading...</div> :
                <>
                    {isErrorTasks &&
                        <ErrorAlert message={'Не удалось получить данные по задачам!'}/>
                    }
                    {isErrorCategories &&
                        <ErrorAlert message={'Не удалось получить данные по категориям!'}/>
                    }
                    {tasks?.map(task => 
                        <Task 
                            key={task.id} 
                            task={task}
                        />
                    )}
                </>
            }
        </>
    );
};

export default Tasks;
