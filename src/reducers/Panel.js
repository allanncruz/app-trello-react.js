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
        case ActionTypes.MOVE_CARD:
                const targetCardDropId = action.payload.id
                const monitorCardId    = action.payload.monitorId

                let targetPanel      = state.filter(panel => panel.cards.indexOf(targetCardDropId))
                let monitorPanel     = state.filter(panel => panel.cards.indexOf(monitorCardId))
                targetPanel          = targetPanel[0]
                monitorPanel         = targetPanel[0]

                const targetCardIndex  = targetPanel.cards.indexOf(targetCardDropId)
                const monitorCardIndex = monitorPanel.card.indexOf(monitorCardId)

            if (targetPanel.id === monitorPanel.id) {
                return state.map((panel) => {
                    const panelId = panel.id

                    if(monitorPanel.id !== panelId) {
                        return panel
                    }

                    return Object.assign({}, panel, {
                        cards: update(monitorPanel.cards, {
                            $splice: [
                                [monitorCardIndex, 1],
                                [targetCardIndex, 0, monitorId]
                            ]
                        })
                    })
                })
            }

            return state.map((panel) => {
                const panelId = panel.id

                if (targetPanel.id === panelId) {
                    return Object.assign({}, panel, {
                        cards: update(panel.cards, {
                            $splice: [
                                [targetCardIndex, 0, monitorId]
                            ]
                        })
                    })
                }

                if (monitorPanel.id === panelId) {
                    return Object.assign({}, panel, {
                        cards: update(panel.cards, {
                            $splice: [
                                [monitorCardIndex, 1]
                            ]
                        })
                    })
                }
            })

            break;
        default:
            return state
    }
}