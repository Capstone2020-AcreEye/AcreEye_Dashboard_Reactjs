import React from 'react'
import DashboardCards from './DashboardCards'
import DashboardTasks from './DashboardTasks'
import ScriptTag from 'react-script-tag';
import { Helmet } from "react-helmet";
import DashboardWeather from './DashboardWeather';


const HomeDashboard = () => {
    const PUBLIC_URL = process.env.PUBLIC_URL

    const greenColorBackgroundStyle = {
        background: '#69a14a'
    }
    const greenColorTextStyle = {
        color: '#69a14a'
    }
    const weatherWidgetStyle = {
        justifyContent: "center",
        alignItems: "center"
    }

    return (
        <div>
            <div class="d-sm-flex justify-content-between align-items-center mb-4">
                <h3 class="text-dark mb-0">Dashboard</h3><a
                    class="btn btn-primary btn-sm d-none d-sm-inline-block" role="button" href="#"
                    style={greenColorBackgroundStyle}><i
                        class="fas fa-download fa-sm text-white-50"></i>&nbsp;Generate Report</a>
            </div>
            <DashboardCards></DashboardCards>
            <div class="row">
                <DashboardTasks></DashboardTasks>
                <div class="col-lg-5 col-xl-4">
                    <DashboardWeather></DashboardWeather>
                </div>
            </div>
        </div>
    )
}

export default HomeDashboard