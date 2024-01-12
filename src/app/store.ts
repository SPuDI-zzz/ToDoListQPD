import { combineReducers, configureStore } from '@reduxjs/toolkit'
import modalsReducer from '../features/modals/modals.slice'
import tasksReducer from '../features/tasks/tasks.slice'
import categoriesReducer from '../features/categories/categories.slice'
import { api } from './services/api';

const reducers = combineReducers({
    tasks: tasksReducer,
    categories: categoriesReducer,
    modals: modalsReducer,
    [api.reducerPath]: api.reducer, 
});

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
 