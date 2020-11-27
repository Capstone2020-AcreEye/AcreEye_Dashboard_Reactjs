import React, { useEffect, useState } from 'react'
import TaskItem from './TaskItem'
import { useDispatch, useSelector } from 'react-redux'
import { initializeTasks } from '../../reducers/tasksReducer'
import AddTaskModal from './AddTaskModal'

const DashboardTasks = () => {

    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks)

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => {setShow(true)}    

    useEffect(() => {
        dispatch(initializeTasks());
    }, [])


    return (

        <div className="col-lg-7 col-xl-8">

            <div className="card shadow mb-4">

                <div className="card-header d-flex justify-content-between align-items-center">
                    <h6 className="font-weight-bold m-0" style={{ color: '#69a14a' }}>Tasks</h6>
                    <div className="dropdown no-arrow">
                        <button className="btn btn-link btn-sm dropdown-toggle"
                            data-toggle="dropdown" aria-expanded="false" type="button">
                            <i className="fas fa-ellipsis-v text-gray-400"></i>
                        </button>
                        <div className="dropdown-menu shadow dropdown-menu-right animated--fade-in">
                            <p className="text-center dropdown-header">dropdown header:</p>
                            <button className="dropdown-item" onClick={handleShow} >&nbsp;Add New Task</button>
                            <button className="dropdown-item">&nbsp;Remove Task</button>
                            <div className="dropdown-divider"></div>
                            <button className="dropdown-item">&nbsp;Something else here</button>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        {tasks.map((item) => {
                            return <TaskItem key={item['id']} id={item['id']} task={item['task']} time={item['time']} > </TaskItem>
                        })}
                    </ul>
                    <ul className="list-group"></ul>
                </div>
            </div>

            <AddTaskModal show={show} handleClose={handleClose}></AddTaskModal>

        </div>
    )
}

export default DashboardTasks