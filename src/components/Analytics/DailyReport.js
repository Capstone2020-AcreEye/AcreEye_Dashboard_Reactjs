import React, { useState, useEffect } from 'react'
import './DailyReport.css';
import NDVIImage from './NDVIImage';
import {useDispatch, useSelector} from 'react-redux'

const DailyReport = () => {

    const dispatch = useDispatch()
    const images = useSelector(state => state.images)

    return (
        <div className="row">
            <div className="reports__images">
                {images.map((item) => {
                    return <NDVIImage key ={item['id']} imageURL={item['imageUrl']}></NDVIImage>
                })}
                {images.map((item) => {
                    return <NDVIImage key ={item['id']} imageURL={item['imageUrl']}></NDVIImage>
                })}
                {images.map((item) => {
                    return <NDVIImage key ={item['id']} imageURL={item['imageUrl']}></NDVIImage>
                })}
                {images.map((item) => {
                    return <NDVIImage key ={item['id']} imageURL={item['imageUrl']}></NDVIImage>
                })}
                {images.map((item) => {
                    return <NDVIImage key ={item['id']} imageURL={item['imageUrl']}></NDVIImage>
                })}
            </div>
        </div>
    )
}

export default DailyReport