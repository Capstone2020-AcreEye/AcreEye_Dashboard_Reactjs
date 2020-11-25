import React, {useState} from 'react'
import './DailyReport.css';
import NDVIImage from './NDVIImage';

const DailyReport = () => {

    const IMAGE_PATH = `${process.env.PUBLIC_URL}/img/ndvi_images`
    const items = [
        {
            imageURL: `${IMAGE_PATH}/image_part_001.jpg`,
            timestamp: 'October 18th, 2020',
            username: 'Akif Manzoor'
        },
        {
            imageURL: `${IMAGE_PATH}/image_part_003.jpg`,
            timestamp: 'October 18th, 2020',
            username: 'Akif Manzoor'
        },
        {
            imageURL: `${IMAGE_PATH}/image_part_004.jpg`,
            timestamp: 'October 18th, 2020',
            username: 'Akif Manzoor'
        },
        {
            imageURL: `${IMAGE_PATH}/image_part_005.jpg`,
            timestamp: 'October 18th, 2020',
            username: 'Akif Manzoor'
        },
        {
            imageURL: `${IMAGE_PATH}/image_part_006.jpg`,
            timestamp: 'October 18th, 2020',
            username: 'Akif Manzoor'
        },
        {
            imageURL: `${IMAGE_PATH}/image_part_007.jpg`,
            timestamp: 'October 18th, 2020',
            username: 'Akif Manzoor'
        },
        {
            imageURL: `${IMAGE_PATH}/image_part_009.jpg`,
            timestamp: 'October 18th, 2020',
            username: 'Akif Manzoor'
        },           
        {
            imageURL: `${IMAGE_PATH}/image_part_010.jpg`,
            timestamp: 'October 18th, 2020',
            username: 'Akif Manzoor'
        }, 
        {
            imageURL: `${IMAGE_PATH}/image_part_011.jpg`,
            timestamp: 'October 18th, 2020',
            username: 'Akif Manzoor'
        }, 
        {
            imageURL: `${IMAGE_PATH}/image_part_012.jpg`,
            timestamp: 'October 18th, 2020',
            username: 'Akif Manzoor'
        },                                              
    ]


    const [images, setImages] = useState(items)

    return (
        <div className="row">
            <div className="reports__images">
                {images.map((item) => {
                    return <NDVIImage imageURL={item['imageURL']}></NDVIImage>
                })}
                {images.map((item) => {
                    return <NDVIImage imageURL={item['imageURL']}></NDVIImage>
                })}
                {images.map((item) => {
                    return <NDVIImage imageURL={item['imageURL']}></NDVIImage>
                })}     
                {images.map((item) => {
                    return <NDVIImage imageURL={item['imageURL']}></NDVIImage>
                })}
                {images.map((item) => {
                    return <NDVIImage imageURL={item['imageURL']}></NDVIImage>
                })}                                                           
            </div>
        </div>
    )
}

export default DailyReport