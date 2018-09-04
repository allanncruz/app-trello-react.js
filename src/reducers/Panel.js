import * as ActionTypes from './../constants/ActionTypes'

export default function panels(state=[], action) {
    switch(action.type) {
        case ActionTypes.CREATE_PANEL:
            return [
                ...state,
                action.payload
            ]
        break;
        default:
            return state
    }
}