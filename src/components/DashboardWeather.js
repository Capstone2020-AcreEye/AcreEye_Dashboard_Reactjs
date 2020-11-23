import React, { useState, useEffect } from 'react'
import CardHeader from './CardHeader'


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

                <CardHeader cardHeaderName={'Ottawa, Ontario'}></CardHeader>


                <div className="card-body" style={weatherWidgetStyle}>
                    <a
                        className="weatherwidget-io" href="https://forecast7.com/en/45d42n75d70/ottawa/"
                        data-label_1="OTTAWA" data-label_2="WEATHER" data-icons="Climacons Animated"
                        data-theme="pure">OTTAWA WEATHER</a>
                </div>
            </div>
        </div>
    )
}

export default DashboardWeather