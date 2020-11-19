import React from 'react'

function TaskItem({task, time}) {
    return (
        <div>
            <li class="list-group-item">
                <div class="row align-items-center no-gutters">
                    <div class="col mr-2">
                        <h6 class="mb-0"><strong>{task}</strong></h6><span
                            class="text-xs">{time}</span>
                    </div>
                    <div class="col-auto">
                        <div class="custom-control custom-checkbox"><input type="checkbox"
                            class="custom-control-input" id="formCheck-1" /><label
                                class="custom-control-label" for="formCheck-1"></label>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    )
}

export default TaskItem
