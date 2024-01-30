import React from 'react';
import Task from '../Task/Task';
import { useGetTasksQuery } from '../../app/services/tasks.api';
import { useGetCategoriesQuery } from '../../app/services/categories.api';
import ErrorAlert from '../../ui-kit/ErrorAlert/ErrorAlert';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { selectAllTasksWithCategory } from '../../app/services/selectors/tasks';

const Tasks = () => {
    const {isLoading: isLoadingTasks, isError: isErrorTasks} = useGetTasksQuery();
    const {isLoading: isLoadingCategories, isError: isErrorCategories} = useGetCategoriesQuery();
    const tasks = useTypedSelector(selectAllTasksWithCategory);

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
