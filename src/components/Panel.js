import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Cards from './Cards'

class Panel extends Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="col-md-3">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h2>MY PANEL</h2>
                    </div>
                    <div className="panel-body">
                        <Cards/>
                    </div>
                    <div className="panel-footer">
                        <button className="btn btn-primary">
                            <i className="ion-plus-round"></i> Card
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Panel