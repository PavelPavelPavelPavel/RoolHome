import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import { modalReducer } from './modalReducer';
import { imgPopupReducer } from './imgPopupReducer';
import { requestFormReducer } from './requestFormReducer';

const rootReducer = combineReducers({
    modalReducer,
    imgPopupReducer,
    requestFormReducer
});

export const store = configureStore({
    reducer: rootReducer,
    composeWithDevTools,
}
);