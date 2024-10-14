import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducer = combineReducers({
    //передаем созданные редюсеры
});

export const store = configureStore({
    reducer: rootReducer,
    composeWithDevTools,
}
);