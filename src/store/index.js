import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import { modalReducer } from './modalReducer';
import { imgPopupReducer } from './imgPopupReducer';

const rootReducer = combineReducers({
    modalReducer,
    imgPopupReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    composeWithDevTools,
}
);