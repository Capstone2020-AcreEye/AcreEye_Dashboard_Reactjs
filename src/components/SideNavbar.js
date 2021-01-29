import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom'
import ScriptTag from 'react-script-tag';


const SideNavbar = () => {
    const PUBLIC_URL = process.env.PUBLIC_URL

    const navLinkStyle = {
        fontSize: "15px"
    }
    const logoStyle = {
        width: "40px"
    }
    const navStyle = {
        background: "#21234b"
    }
    return (
        <div>
            <ScriptTag type="text/javascript" src={`${PUBLIC_URL}/js/theme.js`} />
            <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0" style={navStyle}>
                <div className="container-fluid d-flex flex-column p-0">
                    <a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                        <div className="sidebar-brand-icon rotate-n-15"></div>
                        <div className="sidebar-brand-text mx-3"> <img src={`${PUBLIC_URL}/img/logo.png`} alt="logo" style={logoStyle}></img><span style={{ color: "#69a14a" }}>ACRE EYE</span></div>
                    </a>
                    <hr className="sidebar-divider my-0"></hr>
                    <ul className="nav navbar-nav text-light" id="accordionSidebar">

                        <li className="nav-item"><Link className="nav-link" to="/" style={navLinkStyle}><i className="fas fa-tachometer-alt"></i><span>Dashboard</span></Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/analytics" style={navLinkStyle}><i className="far fa-list-alt"></i><span>Analytics</span></Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/settings" style={navLinkStyle}><i className="fas fa-cogs"></i><span>Settings</span></Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/profile" style={navLinkStyle}><i className="fas fa-address-card"></i><span>Profile</span></Link></li>
                    </ul>
                    <div className="text-center d-none d-md-inline"><button className="btn rounded-circle border-0" id="sidebarToggle" type="button"></button></div>
                </div>
            </nav>

        </div>
    )
}

export default SideNavbar
