import React, { Component } from 'react'
import './Home.scss'

class Home extends Component {
    constructor(props) {
        super (props)
    }

    render() {
        return (
            <div>
                <nav id="navbar-center" className="navbar navbar-default navbar-fixed-top">
                    <div className="container-fluid" >
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a href="" className="navbar-brand">
                                Trello React.js
                            </a>
                        </div>
                        <div className="navbar-collapse collapse" id="navbar">
                            <ul className="nav navbar-nav">

                            </ul>
                        </div>
                    </div>
                </nav>
                <h1>Kanban Border React.js Redux</h1>
            </div>
        )
    }
}

export default Home