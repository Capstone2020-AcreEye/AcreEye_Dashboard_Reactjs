import React, { useState, useEffect } from 'react'
import CardHeader from './CardHeader'
import TaskItem from './TaskItem'
import db from '../firebase'

const DashboardTasks = () => {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        db.collection('tasks').orderBy('time').onSnapshot((snapshot) => {
            setTasks(snapshot.docs.map( doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
                      
            }))
        })
    }, [])

    return (

        <div className="col-lg-7 col-xl-8">

            <div className="card shadow mb-4">

                <CardHeader cardHeaderName={"Tasks"}></CardHeader>

                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        {tasks.map((item) => {
                            return <TaskItem key={item['id']} task={item['task']} time={item['time']} > </TaskItem>
                        })}

                    </ul>
                    <ul className="list-group"></ul>
                </div>
            </div>
        </div>
    )
}

export default DashboardTasks