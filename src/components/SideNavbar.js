import React from 'react'
import '../App.css';
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
            <nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0" style={navStyle}>
                <div class="container-fluid d-flex flex-column p-0">
                    <a class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                        <div class="sidebar-brand-icon rotate-n-15"></div>
                        <div class="sidebar-brand-text mx-3"><img src={`${PUBLIC_URL}/img/ndvi_images/default.png`} alt="logo" style={logoStyle}></img><span style={{ color: "#69a14a" }}>ACREEYE</span></div>
                    </a>
                    <hr class="sidebar-divider my-0"></hr>
                    <ul class="nav navbar-nav text-light" id="accordionSidebar">
                        <li class="nav-item"><a class="nav-link active" href="index.html" style={navLinkStyle}><i class="fas fa-tachometer-alt"></i><span>Dashboard</span></a></li>
                        <li class="nav-item"><a class="nav-link" href="analytics.html" style={navLinkStyle}><i class="far fa-list-alt"></i><span>Analytics</span></a></li>
                        <li class="nav-item"><a class="nav-link" href="table.html" style={navLinkStyle}><i class="fas fa-cogs"></i><span>Settings</span></a></li>
                        <li class="nav-item"><a class="nav-link" href="login.html"><i class="far fa-user-circle"></i><span style={navLinkStyle}>Login</span></a></li>
                        <li class="nav-item"><a class="nav-link" href="register.html"><i class="fas fa-user-circle"></i><span style={navLinkStyle}>Register</span></a></li>
                    </ul>
                    <div class="text-center d-none d-md-inline"><button class="btn rounded-circle border-0" id="sidebarToggle" type="button"></button></div>
                </div>
            </nav>

        </div>
    )
}

export default SideNavbar