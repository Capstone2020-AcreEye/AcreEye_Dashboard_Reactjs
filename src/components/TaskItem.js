import React from 'react'

function TaskItem({task, time}) {
    return (
        <div>
            <li className="list-group-item">
                <div className="row align-items-center no-gutters">
                    <div className="col mr-2">
                        <h6 className="mb-0"><strong>{task}</strong></h6><span
                            className="text-xs">{time}</span>
                    </div>
                    <div className="col-auto">
                        <div className="custom-control custom-checkbox"><input type="checkbox"
                            className="custom-control-input" id="formCheck-1" /><label
                                className="custom-control-label" htmlFor="formCheck-1"></label>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    )
}

export default TaskItem
