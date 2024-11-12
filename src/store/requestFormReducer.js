const defaultState = {
    isOpened: false,
    name: '',
    phone: '',
    text: '',
}


const FORM_STATE = 'FORM_STATE';

export const requestFormReducer = (state = defaultState, action) => {

    switch (action.type) {
        case FORM_STATE:
            return {
                ...state,
                isOpened: action.payload.isOpened,
                name: action.payload.name,
                phone: action.payload.phone,
                text: action.payload.text
            }

        default:
            return state
    }
}

export const requestFormAction = (payload) => ({ type: FORM_STATE, payload });



