import React from 'react'

const IframeWidget = ({ src, height, width }) => {

    return (
        <>
            <iframe
                SRC={src}
                FRAMEBORDER="0" VSPACE="0" HSPACE="0" MARGINWIDTH="0" MARGINHEIGHT="0" SCROLLING="no"
                NORESIZE WIDTH={width} HEIGHT={height}></iframe>
        </>
    )
}

export default IframeWidget