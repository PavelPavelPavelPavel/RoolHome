import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import { modalReducer } from './modalReducer';


const rootReducer = combineReducers({
    modalReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    composeWithDevTools,
}
);