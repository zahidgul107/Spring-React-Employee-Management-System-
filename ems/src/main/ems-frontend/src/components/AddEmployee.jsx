import React, { useState } from 'react'

const AddEmployee = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    function saveEmployee(e) {
        e.preventDefault();
        const employee = {firstName, lastName, email}

        console.log(employee)
    }

    return (
        <div className='container'>
            <br /> <br />
            <div className='row'>
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h2 className='text-center'>Add Employee</h2>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">First Name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setFirstName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e) => setLastName(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={saveEmployee}>Submit</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddEmployee