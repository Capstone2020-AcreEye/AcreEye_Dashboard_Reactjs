import React from 'react'
import DashboardCards from './DashboardCards'
import DashboardTasks from './DashboardTasks'
import ScriptTag from 'react-script-tag';
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
            <div className="d-sm-flex justify-content-between align-items-center mb-4">
                <h3 className="text-dark mb-0">Dashboard</h3>
                <a className="btn btn-primary btn-sm d-none d-sm-inline-block" role="button" href="#"
                    style={greenColorBackgroundStyle}>
                    <i className="fas fa-download fa-sm text-white-50"></i>&nbsp;Generate Report
                </a>
            </div>
            <DashboardCards></DashboardCards>
            <div className="row">
                <DashboardTasks></DashboardTasks>
                <div className="col-lg-5 col-xl-4">
                    <DashboardWeather></DashboardWeather>
                    <IframeWidget src={`https://ottawa.weatherstats.ca/icharts/rain-daily.html?width=525;height=300`}
                        width={`525`} height={`300`}></IframeWidget>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div data-windywidget="map" data-spotid="390421"
                        data-appid="3d0f38dd07f8af25d63950cfab74a0a5" data-newwindbar="true" data-spots="true">
                    </div>
                    <ScriptTag async={true} data-cfasync="false" type="text/javascript"
                        src="https://windy.app/widget3/windy_map_async.js"></ScriptTag>
                </div>
            </div>
        </div>
    )
}

export default HomeDashboard