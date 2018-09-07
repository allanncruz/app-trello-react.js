import React , { Component } from 'react'

class InputEditable extends Component {
    constructor(props) {
        super(props)

        this.handleClickToEdit = this.handleClickToEdit.bind(this)
        this.handleEdit    = this.handleEdit.bind(this)
        this.handleDeleteCard  = this.handleDeleteCard.bind(this)
    }

    handleClickToEdit() {
        const { id } = this.props
        this.props.clickToEdit(id)
    }

    handleEdit(e) {
        if (e.type === 'keypress' && e.key !== 'Enter') {
            return
        }

        const text = e.target.value
        const { id } = this.props

        if (text.trim().length) {
            this.props.editComponent(id, text)
        }
    }

    handleDeleteCard() {
        const { id } = this.props

        this.props.deleteCard(id)
    }

    renderEditable() {
        return (
            <div>
                <input type="text"
                       className="form-control"
                       defaultValue={ this.props.text }
                       onBlur={ this.handleEdit }
                       onKeyPress={ this.handleEdit }/>
            </div>
        )
    }

    renderText() {
        return (
            <div>
                <div className="col-xs-10">
                    <input type="text"
                           className="form-control"
                           defaultValue={ this.props.text }
                           onClick={ this.handleClickToEdit }
                           readOnly />
                </div>
                <div className="col-xs-2" onClick={ this.handleDeleteCard }>
                    <i className="ion-trash-b"></i>
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