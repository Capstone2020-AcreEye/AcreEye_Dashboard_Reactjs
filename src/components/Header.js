import React, { useState } from 'react'

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



    return (
        <div>
            <nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
                <div class="container-fluid">
                    <div class="d-flex flex-row justify-content-around align-items-xl-center" style={statusStyle}>
                        <div class="d-flex align-items-xl-center">
                            <h5 class="status_text status_item"><strong>Battery</strong></h5>
                            <div class="progress">
                                <div class="progress-bar" aria-valuenow={BatteryPercentage} aria-valuemin="0" aria-valuemax="100"
                                    style={progressbarStyle}>{BatteryPercentage}%</div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-xl-center align-items-xl-center">
                            <h5 class="d-xl-flex status_text status_item"><strong>Status</strong></h5><i
                                class="fa fa-circle d-xl-flex status_item" style={{color: statusColor}}></i>
                        </div>
                        <div class="d-flex">
                            <h5 class="status_text status_item"><strong>Flight Time</strong></h5><span
                                class="status_item">{flightTime}</span>
                        </div>
                    </div>
                    <ul class="nav navbar-nav flex-nowrap ml-auto">
                        <div class="d-none d-sm-block topbar-divider"></div>
                        <li class="nav-item dropdown no-arrow">
                            <div class="nav-item dropdown no-arrow"><a class="dropdown-toggle nav-link"
                                data-toggle="dropdown" aria-expanded="false" href="#"><span
                                    class="d-none d-lg-inline mr-2 text-gray-600 small">{username}</span><img
                                        class="border rounded-circle img-profile"
                                        src={`${PUBLIC_URL}/img/dogs/image2.jpeg`}></img></a>
                                <div class="dropdown-menu shadow dropdown-menu-right animated--grow-in"><a
                                    class="dropdown-item" href="#"><i
                                        class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Profile</a><a
                                            class="dropdown-item" href="#"><i
                                                class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Settings</a>
                                    <a class="dropdown-item" href="#"><i
                                        class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Activity log</a>
                                    <div class="dropdown-divider"></div><a class="dropdown-item" href="#"><i
                                        class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Logout</a>
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