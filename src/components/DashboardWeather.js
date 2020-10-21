import React, { useState, useEffect } from 'react'
import ScriptTag from 'react-script-tag';


const DashboardWeather = () => {
    const [iframe, setIframe] = useState(false)
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

    useEffect(() => {
        var js, fjs = document.getElementsByTagName('script')[0];
        console.log('hellooo')
        
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
            <div class="card shadow mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h6 class="font-weight-bold m-0" style={greenColorTextStyle}>Ottawa, Ontario</h6>
                    <div class="dropdown no-arrow"><button class="btn btn-link btn-sm dropdown-toggle"
                        data-toggle="dropdown" aria-expanded="false" type="button"><i
                            class="fas fa-ellipsis-v text-gray-400"></i></button>
                        <div class="dropdown-menu shadow dropdown-menu-right animated--fade-in">
                            <p class="text-center dropdown-header">dropdown header:</p><a
                                class="dropdown-item" href="#">&nbsp;Action</a><a class="dropdown-item"
                                    href="#">&nbsp;Another action</a>
                            <div class="dropdown-divider"></div><a class="dropdown-item"
                                href="#">&nbsp;Something else here</a>
                        </div>
                    </div>
                </div>
                <div class="card-body" style={weatherWidgetStyle}><a
                    class="weatherwidget-io" href="https://forecast7.com/en/45d42n75d70/ottawa/"
                    data-label_1="OTTAWA" data-label_2="WEATHER" data-icons="Climacons Animated"
                    data-theme="pure">OTTAWA WEATHER</a>
                    {/* <ScriptTag type="text/javascript" src={`${PUBLIC_URL}/js/weatherWidget.js`} /> */}
                </div>
            </div>
        </div>
    )
}

export default DashboardWeather