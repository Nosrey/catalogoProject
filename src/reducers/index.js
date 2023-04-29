import { } from '../actions/actions-types'


const initialState = {

};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        // case ACTIVAR_SUMAR:
        //     return {
        //         ...state,
        //         sumar: !state.sumar
        //     }
        default:
            return state;
    }
}

export default rootReducer;