import React from 'react'

const DashboardTasks = () => {

    return (
        <div class="col-lg-7 col-xl-8">
            <div class="card shadow mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h6 class="font-weight-bold m-0" style={{ color: '#69a14a' }}>Tasks</h6>
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
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <div class="row align-items-center no-gutters">
                                <div class="col mr-2">
                                    <h6 class="mb-0"><strong>Lunch meeting</strong></h6><span
                                        class="text-xs">10:30 AM</span>
                                </div>
                                <div class="col-auto">
                                    <div class="custom-control custom-checkbox"><input type="checkbox"
                                        class="custom-control-input" id="formCheck-1" /><label
                                            class="custom-control-label" for="formCheck-1"></label>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="row align-items-center no-gutters">
                                <div class="col mr-2">
                                    <h6 class="mb-0"><strong>Apply Pesticide to plot C4</strong></h6>
                                    <span class="text-xs">11:30 AM</span>
                                </div>
                                <div class="col-auto">
                                    <div class="custom-control custom-checkbox"><input type="checkbox"
                                        class="custom-control-input" id="formCheck-2" /><label
                                            class="custom-control-label" for="formCheck-2"></label>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="row align-items-center no-gutters">
                                <div class="col mr-2">
                                    <h6 class="mb-0"><strong>Get new sheep dog</strong></h6><span
                                        class="text-xs">12:30 AM</span>
                                </div>
                                <div class="col-auto">
                                    <div class="custom-control custom-checkbox"><input type="checkbox"
                                        class="custom-control-input" id="formCheck-4" /><label
                                            class="custom-control-label" for="formCheck-4"></label>
                                    </div>
                                </div>
                            </div>
                        </li>                        
                        <li class="list-group-item">
                            <div class="row align-items-center no-gutters">
                                <div class="col mr-2">
                                    <h6 class="mb-0"><strong>Tell Daughter old sheep dog was sent to
                                                            another farm to live out the rest of his days</strong></h6>
                                    <span class="text-xs">12:30 AM</span>
                                </div>
                                <div class="col-auto">
                                    <div class="custom-control custom-checkbox"><input type="checkbox"
                                        class="custom-control-input" id="formCheck-3" /><label
                                            class="custom-control-label" for="formCheck-3"></label>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="row align-items-center no-gutters">
                                <div class="col mr-2">
                                    <h6 class="mb-0"><strong>Find younger wife</strong></h6><span
                                        class="text-xs">12:30 AM</span>
                                </div>
                                <div class="col-auto">
                                    <div class="custom-control custom-checkbox"><input type="checkbox"
                                        class="custom-control-input" id="formCheck-6" /><label
                                            class="custom-control-label" for="formCheck-6"></label>
                                    </div>
                                </div>
                            </div>
                        </li>                        
                        <li class="list-group-item">
                            <div class="row align-items-center no-gutters">
                                <div class="col mr-2">
                                    <h6 class="mb-0"><strong>Send old wife to other farm</strong></h6><span
                                        class="text-xs">12:30 AM</span>
                                </div>
                                <div class="col-auto">
                                    <div class="custom-control custom-checkbox"><input type="checkbox"
                                        class="custom-control-input" id="formCheck-5" /><label
                                            class="custom-control-label" for="formCheck-5"></label>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="row align-items-center no-gutters">
                                <div class="col mr-2">
                                    <h6 class="mb-0"><strong>Cut down tree</strong></h6><span
                                        class="text-xs">12:30 AM</span>
                                </div>
                                <div class="col-auto">
                                    <div class="custom-control custom-checkbox"><input type="checkbox"
                                        class="custom-control-input" id="formCheck-7" /><label
                                            class="custom-control-label" for="formCheck-7"></label>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul class="list-group"></ul>
                </div>
            </div>
        </div>
    )
}

export default DashboardTasks