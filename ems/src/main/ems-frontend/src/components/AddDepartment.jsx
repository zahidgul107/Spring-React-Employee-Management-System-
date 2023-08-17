import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { createDepartment, getDepartment, updateDepartment } from '../services/DepartmentService'

const AddDepartment = () => {

    const [departmentName, setDepartmentName] = useState('');
    const [departmentDescription, setDepartmentDescription] = useState('');

    const [errors, setErrors] = useState({
        departmentName: '',
        departmentDescription: ''
    })

    const { id } = useParams();

    const navigator = useNavigate();

    useEffect(() => {

        if (id) { 
            getDepartment(id).then((response) => {
                console.log(response.data)
                setDepartmentName(response.data.departmentName);
                setDepartmentDescription(response.data.departmentDescription);
            }).catch(error => {
                console.error(error);
            })
        }
    }, [id])

    function saveOrUpdateDepartment(e) {
        e.preventDefault();
        if (validateForm()) {
            const department = { departmentName, departmentDescription }
            console.log(department)
            if (id) {
                updateDepartment(id, department).then((response) => {
                    console.log(response.data);
                    navigator("/departments");
                }).catch(error => {
                    console.error(error);
                })
            } else {
                createDepartment(department).then((response) => {
                    console.log(response.data);
                    navigator("/departments")
                }).catch(error => {
                    console.error(error);
                })
            }
        }
    }

    function validateForm() {
        let valid = true;

        const errorsCopy = { ...errors }

        if (departmentName.trim()) {
            errorsCopy.departmentName = '';
        } else {
            errorsCopy.departmentName = 'Department name is required';
            valid = false;
        }

        if (departmentDescription.trim()) {
            errorsCopy.departmentDescription = '';
        } else {
            errorsCopy.departmentDescription = 'Department Description is required';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }

    function pageTitle() {
        if (id) {
            return <h2 className='text-center'>Update Department</h2>
        } else {
            return <h2 className='text-center'>Add Department</h2>
        }
    }
    return (
        <div className='container'>
            <br /> <br />
            <div className='row'>
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    {
                        pageTitle()
                    }
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Department Name</label>
                                <input type="text" className={`form-control ${errors.departmentName ? 'is-invalid' : ''}`} id="exampleInputEmail1" aria-describedby="emailHelp" value={departmentName} onChange={(e) => setDepartmentName(e.target.value)} />
                                {errors.departmentName && <div className='invalid-feedback'>{errors.departmentName}</div>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Department Description</label>
                                <input type="text" className={`form-control ${errors.departmentDescription ? 'is-invalid' : ''}`} id="exampleInputPassword1" value={departmentDescription} onChange={(e) => setDepartmentDescription(e.target.value)} />
                                {errors.departmentDescription && <div className='invalid-feedback'>{errors.departmentDescription}</div>}
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={saveOrUpdateDepartment}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddDepartment