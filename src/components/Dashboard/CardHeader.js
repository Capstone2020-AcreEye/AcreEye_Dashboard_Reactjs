import React from 'react'

function CardTaskbar({cardHeaderName}) {
    return (
        <div className="card-header d-flex justify-content-between align-items-center">
            <h6 className="font-weight-bold m-0" style={{ color: '#69a14a' }}>{cardHeaderName}</h6>
            <div className="dropdown no-arrow"><button className="btn btn-link btn-sm dropdown-toggle"
                data-toggle="dropdown" aria-expanded="false" type="button"><i
                    className="fas fa-ellipsis-v text-gray-400"></i></button>
                <div className="dropdown-menu shadow dropdown-menu-right animated--fade-in">
                    <p className="text-center dropdown-header">dropdown header:</p><a
                        className="dropdown-item" href="#">&nbsp;Action</a><a className="dropdown-item"
                            href="#">&nbsp;Another action</a>
                    <div className="dropdown-divider"></div><a className="dropdown-item"
                        href="#">&nbsp;Something else here</a>
                </div>
            </div>
        </div>
    )
}

export default CardTaskbar
