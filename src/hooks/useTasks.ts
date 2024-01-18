import { useTypedSelector } from "./useTypedSelector"

export const useTasks = () => {
    const { tasks } = useTypedSelector(state => state);

    return tasks;
}
