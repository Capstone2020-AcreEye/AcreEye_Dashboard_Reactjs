import React, { useState, useEffect } from 'react'
import './DailyReport.css';
import NDVIImage from './NDVIImage';
import db from '../../firebase'

const DailyReport = () => {

    const [images, setImages] = useState([])

    useEffect(() => {

        var imagesRef = db.collection('data').doc('25-11-2020').collection('images')

        imagesRef.onSnapshot((snapshot) => {
            setImages(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            }))
        })
        
    }, [])

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