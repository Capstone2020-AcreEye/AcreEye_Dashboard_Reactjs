import React from 'react'

function NDVIImage({imageURL}) {
    return (
        <div>
            <div class="reports__image">
                <div class="card">
                    <img src={imageURL} width="160" alt='NDVI_IMAGE'></img>
                </div>
            </div>
        </div>
    )
}

export default NDVIImage
