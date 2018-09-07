import React, { Component } from 'react'
import Panel from './Panel'

class Panels extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const panels = this.props.panels.map(panel => (
            <Panel
                key={ panel.id }
                panel={ panel }
                editPanel={ this.props.editPanel }
            />

        ))
        return(
            <div>
                { panels }
            </div>
        )
    }
}

export default Panels