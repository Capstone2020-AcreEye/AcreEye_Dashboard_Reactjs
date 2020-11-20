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
        <div className="container-fluid">
            <div className="card shadow mb-5">
                <div className="card-header py-3">
                    <div className="row">
                        <div className="col d-xl-flex justify-content-xl-end align-items-xl-center">
                            <button className="btn btn-primary" type="button" style={backgroundStyle}>&lt;</button>
                        </div>
                        <div className="col d-flex d-xl-flex justify-content-xl-center align-items-xl-center">
                            <strong style={fontSizeStyle}>October 8th, 2020</strong></div>
                        <div className="col d-xl-flex justify-content-xl-start align-items-xl-center">
                            <button className="btn btn-primary d-xl-flex justify-content-xl-center" type="button" style={backgroundStyle}>&gt;</button>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row reports_nav">
                        <div className="col d-xl-flex justify-content-xl-center align-items-xl-center">
                            <Link to='/analytics/'><button className="btn btn-primary" type="button" style={backgroundStyle}>
                                <a style={textColorStyle}>Daily Report</a>
                            </button></Link>
                        </div>
                        <div className="col d-xl-flex justify-content-xl-center align-items-xl-center">
                            <Link to='/analytics/infometrics'><button className="btn btn-primary" type="button" style={backgroundStyle}>
                                <a style={textColorStyle}>Infometrics</a>
                            </button></Link>
                        </div>
                        <div className="col d-xl-flex justify-content-xl-center align-items-xl-center">
                            <button className="btn btn-primary" type="button" style={backgroundStyle}>Incident Report</button>
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