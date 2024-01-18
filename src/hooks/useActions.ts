import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux"
import { actions as modalsActions } from '../features/modals/modals.slice'

const rootActions = {
    ...modalsActions
}

export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
