import { useTypedSelector } from "./useTypedSelector"

export const useCategories = () => {
    const { categories } = useTypedSelector(state => state);

    return categories;
}
