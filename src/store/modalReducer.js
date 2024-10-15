const defaultState = {
    isOpened: false,
};

const TOGGLE_MODAL = "TOGGLE_MODAL";

export const modalReducer = (state = defaultState, action) => {

    switch (action.type) {
        case TOGGLE_MODAL:
            return {
                ...state, isOpened: action.payload
            }

        default:
            return state
    }
}

export const addModalAction = (payload) => ({ type: TOGGLE_MODAL, payload });