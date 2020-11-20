import React, {useState} from 'react'
import {auth} from '../firebase'

const Header = () => {
    const PUBLIC_URL = process.env.PUBLIC_URL

    const [BatteryPercentage, setBatteryPercentage] = useState("50")
    const [flightTime, setFlightTime] = useState("17hrs")
    const [username, setUsername] = useState("Akif Manzoor")
    const [statusColor, setStatusColor] = useState("#69a14a")

    const statusStyle = {
        width: '100%'
    }

    const progressbarStyle = {
        width: '50%'
    }

    const droneStatusStyle = {
        color: statusColor
    }

    const signOut = () => {
        auth.signOut().then((res) => {
            console.log('signed out!')
        })
    }



    return (
        <div>
            <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
                <div className="container-fluid">
                    <div className="d-flex flex-row justify-content-around align-items-xl-center" style={statusStyle}>
                        <div className="d-flex align-items-xl-center">
                            <h5 className="status_text status_item"><strong>Battery</strong></h5>
                            <div className="progress">
                                <div className="progress-bar" aria-valuenow={BatteryPercentage} aria-valuemin="0" aria-valuemax="100"
                                    style={progressbarStyle}>{BatteryPercentage}%</div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-xl-center align-items-xl-center">
                            <h5 className="d-xl-flex status_text status_item"><strong>Status</strong></h5><i
                                className="fa fa-circle d-xl-flex status_item" style={{color: statusColor}}></i>
                        </div>
                        <div className="d-flex">
                            <h5 className="status_text status_item"><strong>Flight Time</strong></h5><span
                                className="status_item">{flightTime}</span>
                        </div>
                    </div>
                    <ul className="nav navbar-nav flex-nowrap ml-auto">
                        <div className="d-none d-sm-block topbar-divider"></div>
                        <li className="nav-item dropdown no-arrow">
                            <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link"
                                data-toggle="dropdown" aria-expanded="false" href="#"><span
                                    className="d-none d-lg-inline mr-2 text-gray-600 small">{username}</span><img
                                        className="border rounded-circle img-profile"
                                        src={`${PUBLIC_URL}/img/dogs/image2.jpeg`}></img></a>
                                <div className="dropdown-menu shadow dropdown-menu-right animated--grow-in"><a
                                    className="dropdown-item" href="#"><i
                                        className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Profile</a><a
                                            className="dropdown-item" href="#"><i
                                                className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Settings</a>
                                    <a className="dropdown-item" href="#"><i
                                        className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Activity
                                            log</a>
                                    <div className="dropdown-divider"></div><a className="dropdown-item" href="#" onClick={signOut}><i
                                        className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Logout</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Header