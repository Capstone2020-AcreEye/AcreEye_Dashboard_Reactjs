import React from 'react'

function CardTaskbar({cardHeaderName}) {
    return (
        <div class="card-header d-flex justify-content-between align-items-center">
            <h6 class="font-weight-bold m-0" style={{ color: '#69a14a' }}>{cardHeaderName}</h6>
            <div class="dropdown no-arrow"><button class="btn btn-link btn-sm dropdown-toggle"
                data-toggle="dropdown" aria-expanded="false" type="button"><i
                    class="fas fa-ellipsis-v text-gray-400"></i></button>
                <div class="dropdown-menu shadow dropdown-menu-right animated--fade-in">
                    <p class="text-center dropdown-header">dropdown header:</p><a
                        class="dropdown-item" href="#">&nbsp;Action</a><a class="dropdown-item"
                            href="#">&nbsp;Another action</a>
                    <div class="dropdown-divider"></div><a class="dropdown-item"
                        href="#">&nbsp;Something else here</a>
                </div>
            </div>
        </div>
    )
}

export default CardTaskbar
