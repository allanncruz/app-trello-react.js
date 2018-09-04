import * as ActionTypes from './../constants/ActionTypes'
import uuid from 'uuid/v4'

const createPanel = (value) => {
    return {
        type: ActionTypes.CREATE_PANEL,
        payload: {
            id: uuid(),
            name: value,
            cards: []
        }
    }
}

export default {
    createPanel
}