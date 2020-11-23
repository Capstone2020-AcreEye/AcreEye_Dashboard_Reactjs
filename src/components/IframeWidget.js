import React from 'react'

const IframeWidget = ({ src, height, width }) => {

    return (
        <>
            <iframe
                title={src}
                src={src}
                frameBorder="0" vspace="0" hspace="0" marginWidth="0" marginHeight="0" scrolling="no"
                noresize="false" width={width} height={height}></iframe>
        </>
    )
}

export default IframeWidget