import React, { button } from 'react'
import {
    BrowserRouter as Router,
    Switch, Route, Link
} from 'react-router-dom'
import DailyReport from './DailyReport'
import Infometrics from './Infometrics'


const Analytics = () => {

    const backgroundStyle = {
        background: "#69a14a"
    }
    const fontSizeStyle = {
        fontSize: '24px'
    }
    const textColorStyle = {
        color: "rgb(254, 254, 254)"
    }

    return (
        <div class="container-fluid">
            <div class="card shadow mb-5">
                <div class="card-header py-3">
                    <div class="row">
                        <div class="col d-xl-flex justify-content-xl-end align-items-xl-center">
                            <button class="btn btn-primary" type="button" style={backgroundStyle}>&lt;</button>
                        </div>
                        <div class="col d-flex d-xl-flex justify-content-xl-center align-items-xl-center">
                            <strong style={fontSizeStyle}>October 8th, 2020</strong></div>
                        <div class="col d-xl-flex justify-content-xl-start align-items-xl-center">
                            <button class="btn btn-primary d-xl-flex justify-content-xl-center" type="button" style={backgroundStyle}>&gt;</button>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row reports_nav">
                        <div class="col d-xl-flex justify-content-xl-center align-items-xl-center">
                            <Link to='/analytics/'><button class="btn btn-primary" type="button" style={backgroundStyle}>
                                <a style={textColorStyle}>Daily Report</a>
                            </button></Link>
                        </div>
                        <div class="col d-xl-flex justify-content-xl-center align-items-xl-center">
                            <Link to='/analytics/infometrics'><button class="btn btn-primary" type="button" style={backgroundStyle}>
                                <a style={textColorStyle}>Infometrics</a>
                            </button></Link>
                        </div>
                        <div class="col d-xl-flex justify-content-xl-center align-items-xl-center">
                            <button class="btn btn-primary" type="button" style={backgroundStyle}>Incident Report</button>
                        </div>
                    </div>

                    <Switch>
                        <Route path="/analytics/infometrics">
                            <Infometrics />
                        </Route>
                        <Route path="/analytics/">
                            <DailyReport />
                        </Route>
                    </Switch>

                </div>
            </div>
        </div>
    )
}

export default Analytics