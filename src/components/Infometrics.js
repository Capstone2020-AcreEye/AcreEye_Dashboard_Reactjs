import React from 'react'
import IframeWidget from './IframeWidget'
import '../App.css';


const Infometrics = () => {

    return (
        <div className="infometric_graph_row">
            <IframeWidget src={"https://ottawa.weatherstats.ca/icharts/dew_point-daily.html?width=500;height=300"} width={"500"} height={"300"}></IframeWidget>
            <IframeWidget src={"https://ottawa.weatherstats.ca/icharts/gdd_7-daily.html?width=500;height=300"} width={"500"} height={"300"}></IframeWidget>
            <IframeWidget src={"https://ottawa.weatherstats.ca/icharts/forecast_uv-daily.html?width=500;height=300"} width={"500"} height={"300"}></IframeWidget>

        </div>
    )
}

export default Infometrics