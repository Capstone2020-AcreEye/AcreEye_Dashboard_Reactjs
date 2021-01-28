import React from 'react'
import { auth } from '../firebase'
import { useSelector } from 'react-redux'


const Header = () => {
    const PUBLIC_URL = process.env.PUBLIC_URL
    const curr_user = useSelector(state => state.curr_user)
    const header = useSelector(state => state.header)

    const progressbarStyle = {
        width: `${header.batteryPercentage}%`
    }

    const statusColorStyle = {
        color: `${header.statusColor}`
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
                    <div className="d-flex flex-row justify-content-around align-items-xl-center" style={{ width: '100%' }}>
                        <div className="d-flex align-items-xl-center">
                            <h5 className="status_text status_item"><strong>Battery</strong></h5>
                            <div className="progress">
                                <div className="progress-bar" aria-valuenow={header.batteryPercentage} aria-valuemin="0" aria-valuemax="100"
                                    style={progressbarStyle} >{header.batteryPercentage}%</div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-xl-center align-items-xl-center">
                            <h5 className="d-xl-flex status_text status_item"><strong>Status</strong></h5><i
                                className="fa fa-circle d-xl-flex status_item" style={statusColorStyle}></i>
                        </div>
                        <div className="d-flex">
                            <h5 className="status_text status_item"><strong>Flight Time</strong></h5><span
                                className="status_item">{header.flightTime}hrs</span>
                        </div>
                    </div>
                    <ul className="nav navbar-nav flex-nowrap ml-auto">
                        <div className="d-none d-sm-block topbar-divider"></div>
                        <li className="nav-item dropdown no-arrow">

                            <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link"
                                data-toggle="dropdown" aria-expanded="false" href="#"><span
                                    className="d-none d-lg-inline mr-2 text-gray-600 small">{curr_user?.displayName}</span><img
                                        className="border rounded-circle img-profile"
                                        src={`${PUBLIC_URL}/img/dogs/image2.jpeg`}></img></a>

                                <div className="dropdown-menu shadow dropdown-menu-right animated--grow-in">
                                    <a className="dropdown-item" href="profile">
                                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Profile</a>
                                    <a className="dropdown-item" href="settings">
                                        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Settings</a>

                                    <a className="dropdown-item" href="#"><i
                                        className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Activity log</a>

                                    <div className="dropdown-divider"></div><a className="dropdown-item" href="/" onClick={signOut}><i
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
