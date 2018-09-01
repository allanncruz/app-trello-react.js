import React, { Component } from 'react'
import Card from './Card'

class Cards extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const cards = this.props.cards.map(card => (
            <Card
                key={ card.id }
            />
        ))

        return(
            <ul>
                { cards }
            </ul>
        )
    }
}

export default Cards