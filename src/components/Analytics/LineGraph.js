import React from 'react'
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function LineGraph({options}) {

    return (
        <div>
            <CanvasJSChart options = {options} />
        </div>
    )
}

export default LineGraph
