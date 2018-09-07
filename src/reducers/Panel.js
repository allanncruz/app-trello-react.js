import * as ActionTypes from './../constants/ActionTypes'

export default function panels(state = [], action) {
    switch(action.type) {
        case ActionTypes.CREATE_PANEL:
            return [
                ...state,
                action.payload
            ]
        break;
        case ActionTypes.EDIT_PANEL:
            return state.map(panel => {
                const { id } = action.payload
                if ( id === panel.id) return Object.assign({}, panel, action.payload)
                return panel
            })
        break;
        default:
            return state
    }
}