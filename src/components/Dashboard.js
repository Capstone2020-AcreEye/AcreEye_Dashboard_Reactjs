import React from 'react'

import {
    Switch, Route
  } from 'react-router-dom'

import SideNavbar from './SideNavbar';
import Header from './Header';
import HomeDashboard from './Dashboard/HomeDashboard';
import Footer from './Footer'
import Analytics from './Analytics/Analytics'
import Settings from './Settings'

const Dashboard = () => {
    return (
        <div className="App">
            <header className="App-header"></header>

            <div id="wrapper">
                <div>
                <SideNavbar></SideNavbar>
                </div>
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <Header></Header>
                        <div className="container-fluid">
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
                <a className="border rounded d-inline scroll-to-top" href="#wrapper"><i className="fas fa-angle-up"></i></a>
            </div>
        </div>
    )
}

export default Dashboard