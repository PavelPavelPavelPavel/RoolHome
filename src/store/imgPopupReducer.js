const defaultState = {
    isOpened: false,
    id: '',
}

const TOGGLE_IMG_FULLSIZE = 'TOGGLE_IMG_FULLSIZE';

export const imgPopupReducer = (state = defaultState, action) => {

    switch (action.type) {
        case TOGGLE_IMG_FULLSIZE:
            return {
                ...state, fileName: action.payload.fileName, isOpened: action.payload.isOpened, id: action.payload.id
            }

        default:
            return state
    }
}

export const toggleFullSizeImgAction = (payload) => ({ type: TOGGLE_IMG_FULLSIZE, payload });



