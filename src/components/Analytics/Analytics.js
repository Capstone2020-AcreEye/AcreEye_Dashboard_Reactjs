import React, {useState, useEffect} from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import DailyReport from './DailyReport'
import Infometrics from './Infometrics'
import {useDispatch} from 'react-redux'
import { updateImages } from '../../reducers/imagesReducer'
import { initializeImages } from '../../reducers/imagesReducer';


const Analytics = () => {

    useEffect(() => {
        dispatch( initializeImages() )
    }, [])

    const dispatch = useDispatch()

    const [date, setDate] = useState(new Date().toDateString())

    const previousDate = () => {
        const newDate = new Date(date)
        newDate.setDate(newDate.getDate() - 1)
        setDate( newDate.toDateString() )  

        dispatch(updateImages(new Date(newDate) ))
    }

    const nextDate = () => {
        const newDate = new Date(date)
        newDate.setDate(newDate.getDate() + 1)
        setDate( newDate.toDateString())

        dispatch(updateImages(new Date(newDate)))
    }

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
                            <button className="btn btn-primary" type="button" onClick={previousDate} style={backgroundStyle}>&lt;</button>
                        </div>
                        <div className="col d-flex d-xl-flex justify-content-xl-center align-items-xl-center">
                            <strong style={fontSizeStyle}> {date} </strong></div>
                        <div className="col d-xl-flex justify-content-xl-start align-items-xl-center">
                            <button className="btn btn-primary d-xl-flex justify-content-xl-center" type="button" onClick={nextDate} style={backgroundStyle}>&gt;</button>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <div className="row reports_nav">
                        <div className="col d-xl-flex justify-content-xl-center align-items-xl-center">
                            <Link to='/analytics/'><button className="btn btn-primary" type="button" style={backgroundStyle}>
                                <span style={textColorStyle}>Daily Report</span>
                            </button></Link>
                        </div>
                        <div className="col d-xl-flex justify-content-xl-center align-items-xl-center">
                            <Link to='/analytics/infometrics'><button className="btn btn-primary" type="button" style={backgroundStyle}>
                                <span style={textColorStyle}>Infometrics</span>
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
                            <DailyReport/>
                        </Route>
                    </Switch>

                </div>
            </div>
        </div>
    )
}

export default Analytics