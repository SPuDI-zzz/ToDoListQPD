import { useTypedSelector } from "./useTypedSelector"

export const useModals = () => {
    const { modals } = useTypedSelector(state => state);

    return modals;
}
