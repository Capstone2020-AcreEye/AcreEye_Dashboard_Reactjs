import React, { useState } from 'react'

const DashboardCards = () => {

    const [monthlyEarnings, setMonthlyEarnings] = useState('$40,000')
    const [annualEarnings, setAnnualEarnings] = useState('$215,000')
    const [taskPercentage, setTaskPercentage] = useState('50')
    const [pendingRequests, setPendingRequests] = useState('18')

    return (
        <div>
            <div className="row">
                <div className="col-md-6 col-xl-3 mb-4">
                    <div className="card shadow border-left-primary py-2">
                        <div className="card-body">
                            <div className="row align-items-center no-gutters">
                                <div className="col mr-2">
                                    <div className="text-uppercase text-primary font-weight-bold text-xs mb-1">
                                        <span>Earnings (monthly)</span></div>
                                    <div className="text-dark font-weight-bold h5 mb-0"><span>{monthlyEarnings}</span></div>
                                </div>
                                <div className="col-auto"><i className="fas fa-calendar fa-2x text-gray-300"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-3 mb-4">
                    <div className="card shadow border-left-success py-2">
                        <div className="card-body">
                            <div className="row align-items-center no-gutters">
                                <div className="col mr-2">
                                    <div className="text-uppercase text-success font-weight-bold text-xs mb-1">
                                        <span>Earnings (annual)</span></div>
                                    <div className="text-dark font-weight-bold h5 mb-0"><span>{annualEarnings}</span></div>
                                </div>
                                <div className="col-auto"><i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-3 mb-4">
                    <div className="card shadow border-left-info py-2">
                        <div className="card-body">
                            <div className="row align-items-center no-gutters">
                                <div className="col mr-2">
                                    <div className="text-uppercase text-info font-weight-bold text-xs mb-1">
                                        <span>Tasks</span></div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="text-dark font-weight-bold h5 mb-0 mr-3">
                                                <span>50%</span></div>
                                        </div>
                                        <div className="col">
                                            <div className="progress progress-sm">
                                                <div 
                                                    className="progress-bar bg-info"
                                                    aria-valuenow={taskPercentage} aria-valuemin="0" aria-valuemax="100" 
                                                    style={{ width: '50%' }}>
                                                    <span className="sr-only">{taskPercentage}%</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto"><i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-3 mb-4">
                    <div className="card shadow border-left-warning py-2">
                        <div className="card-body">
                            <div className="row align-items-center no-gutters">
                                <div className="col mr-2">
                                    <div className="text-uppercase text-warning font-weight-bold text-xs mb-1">
                                        <span>Pending Requests</span></div>
                                    <div className="text-dark font-weight-bold h5 mb-0"><span>{pendingRequests}</span></div>
                                </div>
                                <div className="col-auto"><i className="fas fa-comments fa-2x text-gray-300"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardCards