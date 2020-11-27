import React from 'react'
import { useField } from '../../hooks/hooks'
import './AddTaskModal.css'
import Modal from 'react-bootstrap/Modal'

function AddTaskModal({ show, handleClose }) {
    const task = useField('task')
    const time = useField('time')

    return (
        <Modal
            show={show}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            size='lg'>
            <Modal.Header>
                <Modal.Title>Add a New Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="card-body p-0">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="p-5">
                                <form className="user" onSubmit={null}>
                                    <div className="form-group"><input className="form-control form-control-user" type={task.type} onChange={task.onChange} value={task.value} id="exampleInputEmail" placeholder="Enter Task Name..." name="task" /></div>
                                    <div className="form-group"><input className="form-control form-control-user" type={time.type} onChange={time.onChange} value={time.value} id="exampleInputPassword" placeholder="Add Task Time..." name="time" /></div>
                                    <div className='form-group-buttons'>
                                        <button className="btn btn-primary btn-block text-white btn-user" onClick={handleClose} type="submit" style={{ background: '#69a14a' }}>Submit</button>
                                        <button className="btn btn-primary btn-block text-white btn-user" onClick={handleClose} type="submit" style={{ background: '#f40e01' }}>Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default AddTaskModal
