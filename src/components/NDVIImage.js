import React from 'react'

function NDVIImage({imageURL}) {
    return (
        <div>
            <div className="reports__image">
                <div className="card">
                    <img src={imageURL} width="160" alt='NDVI_IMAGE'></img>
                </div>
            </div>
        </div>
    )
}

export default NDVIImage
