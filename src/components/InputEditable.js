import React, { Component  } from 'react'

class InputEditable extends Component {
    constructor(props) {
        super(props)
    }

    renderEditable() {
        return (
            <div>
                <input type="text"
                       className="form-control"
                       defaultValue={ this.props.text} />
            </div>
        )
    }

    renderText() {
        return(
            <div>
                <div className="col-xs-10">
                    <input type="text"
                           className="form-control"
                           defaultValue={ this.props.text}
                           readOnly />
                </div>
            </div>
        )
    }

    render() {
        if (this.props.edit) {
            return this.renderEditable()
        }

        return this.renderText()
    }
}

export default InputEditable