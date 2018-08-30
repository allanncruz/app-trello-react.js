import React from 'react'
import ReactDOM from'react-dom'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

import Home from './containers/Home'

import cfg from './store'
import './index.scss'

const store = cfg.configStore()

ReactDOM.render(
    <div>
        <header id="header">
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
        </header>
        <main id="main" className="container-fluid">
            <Provider store={ store }>
                <ConnectedRouter history = { cfg.history } >
                    <Route exact path="/" component={ Home } />
                </ConnectedRouter>
            </Provider>
        </main>
    </div>,
document.getElementById('root')
)