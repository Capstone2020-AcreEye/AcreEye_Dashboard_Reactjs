import React from 'react'

import {
    BrowserRouter as Router,
    Switch, Route, Link
  } from 'react-router-dom'

import SideNavbar from './SideNavbar';
import Statusbar from './Statusbar';
import HomeDashboard from './HomeDashboard';
import Footer from './Footer'
import Login from './Login'
import Analytics from './Analytics'
import Register from './Register'
import Settings from './Settings'

const Dashboard = () => {
    return (
        <div className="App">
            <header className="App-header"></header>

            <div id="wrapper">
                <div>
                <SideNavbar></SideNavbar>
                </div>
                <div class="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <Statusbar></Statusbar>
                        <div class="container-fluid">
                            <Switch>
                                <Route path="/analytics">
                                    <Analytics />
                                </Route>
                                <Route path="/settings">
                                    <Settings />
                                </Route>
                                <Route path="/">
                                    <HomeDashboard></HomeDashboard>
                                </Route>
                            </Switch>
                        </div>

                    </div>
                    <Footer></Footer>
                </div>
                <a class="border rounded d-inline scroll-to-top" href="#wrapper"><i class="fas fa-angle-up"></i></a>
            </div>
        </div>
    )
}

export default Dashboard