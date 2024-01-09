import React, { useEffect, useState } from 'react';
import { getTasks } from '../../api/apiTasks';
import { ITask } from '../../interfaces/interfaces';
import List from '../List/List';
import Task from '../Task/Task';
import { getCategories } from '../../api/apiCatagories';

const Tasks = () => {
    const [tasks, setTasks] = useState<ITask[]>([]);

    useEffect(() => {
        (async () => {
            const [taskResponse, categoryResponse] = await Promise.all([getTasks(), getCategories()]);

            const tasks = taskResponse.map((task):ITask => {
                const categoryName = categoryResponse.find(category => category.id === task.categoryId)?.name;
                
                return {
                    id: task.id,
                    name: task.name,
                    description: task.description,
                    categoryName: categoryName,
                }
            });

            setTasks(tasks);
        })();
    }, [tasks]);


    return (
        <List
            items={tasks}
            renderItem={(task: ITask) => 
                <Task
                    task={task}
                    key={task.id}
                />
            } 
        />
    );
};

export default Tasks;
