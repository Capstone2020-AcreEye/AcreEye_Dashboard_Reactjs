import React, { useState, useEffect } from 'react'


const DashboardWeather = () => {
    const [iframe, setIframe] = useState(false)

    const weatherWidgetStyle = {
        justifyContent: "center",
        alignItems: "center"
    }

    useEffect(() => {
        var js, fjs = document.getElementsByTagName('script')[0];

        js = document.createElement('script');
        js.id = 'weatherwidget-io-js';
        js.src = 'https://weatherwidget.io/js/widget.min.js';
        fjs.parentNode.insertBefore(js, fjs);
        setIframe(true)

        return () => {

        }
    }, [iframe]);


    return (
        <div>
            <div className="card shadow mb-4">

                <div className="card-header d-flex justify-content-between align-items-center">
                    <h6 className="font-weight-bold m-0" style={{ color: '#69a14a' }}>Ottawa, Ontario</h6>
                    <div className="dropdown no-arrow">
                        <button className="btn btn-link btn-sm dropdown-toggle"
                            data-toggle="dropdown" aria-expanded="false" type="button">
                            <i className="fas fa-ellipsis-v text-gray-400"></i>
                        </button>
                        <div className="dropdown-menu shadow dropdown-menu-right animated--fade-in">
                            <p className="text-center dropdown-header">dropdown header:</p>
                            <button className="dropdown-item" >&nbsp;Change City</button>
                            <button className="dropdown-item">&nbsp;Another Action</button>
                            <div className="dropdown-divider"></div>
                            <button className="dropdown-item">&nbsp;Something else here</button>
                        </div>
                    </div>
                </div>


                <div className="card-body" style={weatherWidgetStyle}>
                    <a
                        className="weatherwidget-io" href="https://forecast7.com/en/45d42n75d70/ottawa/"
                        data-label_1="OTTAWA" data-label_2="WEATHER" data-icons="Climacons Animated"
                        data-theme="pure">
                        OTTAWA WEATHER
                    </a>
                </div>
            </div>

        </div>
    )
}

export default DashboardWeather