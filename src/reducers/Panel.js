import * as ActionTypes from './../constants/ActionTypes'
import update from 'react-addons-update'

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
        case ActionTypes.DELETE_PANEL:
            const { id } = action.payload

            return state.filter(panel => id !== panel.id)
        break;
        case ActionTypes.MOVE_PANEL:
            const targetDropId = action.payload.id
            const monitorId    = action.payload.monitorId

            const targetIndex = state.findIndex(panel => panel.id === targetDropId)
            const monitorIndex = state.findIndex(panel => panel.id === monitorId)

            return update(state, {
                $splice: [
                    [monitorIndex, 1],
                    [targetIndex, 0, state.find(panel => panel.id === monitorId)]
                ]
            })
        break;
        default:
            return state
    }
}