import React from 'react'
import DashboardCards from './DashboardCards'
import DashboardTasks from './DashboardTasks'
import ScriptTag from 'react-script-tag';
import { Helmet } from "react-helmet";
import DashboardWeather from './DashboardWeather';
import IframeWidget from './IframeWidget';


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
                    <IframeWidget src={`https://ottawa.weatherstats.ca/icharts/rain-daily.html?width=525;height=300`}
                        width={`525`} height={`300`}></IframeWidget>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div data-windywidget="map" data-spotid="390421"
                        data-appid="3d0f38dd07f8af25d63950cfab74a0a5" data-newwindbar="true" data-spots="true">
                    </div>
                    <ScriptTag async="true" data-cfasync="false" type="text/javascript"
                        src="https://windy.app/widget3/windy_map_async.js"></ScriptTag>
                </div>
            </div>
        </div>
    )
}

export default HomeDashboard