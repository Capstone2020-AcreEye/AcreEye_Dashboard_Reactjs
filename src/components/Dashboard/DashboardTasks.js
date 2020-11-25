import React, {useEffect} from 'react'
import CardHeader from './CardHeader'
import TaskItem from './TaskItem'
import {useDispatch, useSelector} from 'react-redux'
import {initializeTasks} from '../../reducers/tasksReducer'

const DashboardTasks = () => {

    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks)

    useEffect(() => {
        dispatch(initializeTasks());
    }, [])


    console.log(tasks)

    return (

        <div className="col-lg-7 col-xl-8">

            <div className="card shadow mb-4">

                <CardHeader cardHeaderName={"Tasks"}></CardHeader>

                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        {tasks.map( (item) => {
                            return <TaskItem key={item['id']} id={item['id']} task={item['task']} time={item['time']} > </TaskItem>
                        })}
                    </ul>
                    <ul className="list-group"></ul>
                </div>
            </div>
        </div>
    )
}

export default DashboardTasks