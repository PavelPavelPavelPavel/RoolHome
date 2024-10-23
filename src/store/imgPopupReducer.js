const defaultState = {
    isOpened: false,
    id: '',
}

const TOGGLE_IMG_FULLSIZE = 'TOGGLE_IMG_FULLSIZE';

export const imgPopupReducer = (state = defaultState, action) => {

    switch (action.type) {
        case TOGGLE_IMG_FULLSIZE:
            return {
                ...state, isOpened: action.payload.isOpened, fileName: action.payload.fileName
            }

        default:
            return state
    }
}

export const toggleFullSizeImgAction = (payload) => ({ type: TOGGLE_IMG_FULLSIZE, payload });



