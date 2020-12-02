import React, {useState, useEffect} from 'react'
import IframeWidget from '../IframeWidget'
import LineGraph from '../LineGraph';
import './Infometrics.css';
import db from '../../firebase'


const Infometrics = () => {
    const [temperatureData, setTemperatureData] = useState([]);

    useEffect(() => {
        db.collection('data').doc('25-11-2020').collection('temperatures').orderBy('time').onSnapshot(snapshot => {
            var arr = snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    time: new Date(doc.data().time.toDate()),
                    temp: doc.data().temp
                }
            ))
            setTemperatureData(arr)
            console.log(arr)
            //var date = new Date(arr[0].time.toDate())
            //console.log(date.getHours()) 
        })
    }, [])

    const dataPoints = temperatureData.map(dataPoint => {
        return {
            x: parseInt(dataPoint.time.getHours()),
            y: parseInt(dataPoint.temp)
        }
    })
    console.log(dataPoints)
    const tempOptions = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        title:{
            text: "Temperature"
        },
        axisY: {
            title: "Degrees Celsius",
            includeZero: false,
            suffix: "°C"
        },
        axisX: {
            title: "Time of Day",
            suffix: ":00",
            interval: 2
        },
        data: [{
            type: "line",
            toolTipContent: "{x}:00 | {y}°C",
            dataPoints: dataPoints
        }]
    }

    return (
        <div className="infometrics">
            <div className="infometric_graph_row">

                <IframeWidget src={"https://ottawa.weatherstats.ca/icharts/dew_point-daily.html?width=500;height=300"} width={"500"} height={"300"}></IframeWidget>
                <IframeWidget src={"https://ottawa.weatherstats.ca/icharts/gdd_7-daily.html?width=500;height=300"} width={"500"} height={"300"}></IframeWidget>
                <IframeWidget src={"https://ottawa.weatherstats.ca/icharts/forecast_uv-daily.html?width=500;height=300"} width={"500"} height={"300"}></IframeWidget>
            </div>
            <div >
                <LineGraph options={tempOptions}/>
            </div>
        </div>
    )
}

export default Infometrics