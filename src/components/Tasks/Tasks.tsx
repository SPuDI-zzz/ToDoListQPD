import React from 'react';
import { ITask } from '../../interfaces/interfaces';
import Task from '../Task/Task';
import { useGetTasksQuery } from '../../app/services/tasks.api';
import { useGetCategoriesQuery } from '../../app/services/categories.api';

const Tasks = () => {
    const {isLoading: isLoadingTasks, data: tasksResponse} = useGetTasksQuery();
    const {isLoading: isLoadingCategories, data: categoriesResponse} = useGetCategoriesQuery();

    const tasks = tasksResponse?.map((task):ITask => {
        const categoryName = categoriesResponse?.find(category => category.id === task.categoryId)?.name;
                
        return {
            id: task.id,
            name: task.name,
            description: task.description,
            categoryName: categoryName,
        }
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
                    )
                    : ''
            }
            <Task 
                key={1536}
                task={{
                    id: 1536,
                    categoryName: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,`,
                    name: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,',
                    description: `Lorem ipsum dolor
                        sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui.`
                } as ITask}
            />
        </>
    );
};

export default Tasks;
