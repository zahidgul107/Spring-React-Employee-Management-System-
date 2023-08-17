import React, { useEffect, useState } from 'react'
import { deleteDepartment, getAllDepartments } from '../services/DepartmentService';
import { Link, useNavigate } from 'react-router-dom';

const ListDepartment = () => {
  const [departments, setDepartments] = useState([]);

  const navigator = useNavigate();

  useEffect(() =>{
    getDepartments();
  },[])

  function getDepartments() {
    getAllDepartments().then((response) =>{
        console.log(response.data);
        setDepartments(response.data)
    })
  }

  function updateDepartment(id) {
    navigator(`/updateDepartment/${id}`)
  }

  function removeDepartment(id) {
    deleteDepartment(id).then((response) => {
        getDepartments();
        console.log(response.data);
    }).catch(error =>{
        console.error(error);
    })
  }
  return (
    <div className='container'>
            <h2 className='text-center'>List of Departments</h2>
            <Link to='/addDepartment' className="btn btn-secondary mb-2">Add Department</Link>
            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">Department Name</th>
                        <th scope="col">Department Description</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        departments.map(department =>
                        <tr key={department.id}>
                            <td>{department.departmentName}</td>
                            <td>{department.departmentDescription}</td>
                            <td>
                                <button className='btn btn-info me-2' onClick={() =>updateDepartment(department.id)}>Update</button>
                                <button className='btn btn-danger' onClick={() => removeDepartment(department.id)}>Delete</button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
  )
}

export default ListDepartment