import * as ActionTypes from './../constants/ActionTypes'

export default function cards(state = [], action) {
    switch(action.type) {
        case ActionTypes.CREATE_CARD:
            console.log([...state, action.payload])
            return [
                ...state,
                action.payload
            ]
        break;
        default:
            return state
    }
}