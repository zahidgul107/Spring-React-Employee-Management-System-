import axios from "axios";

const DEPARTMENT_REST_API_BASE_URL = 'http://localhost:8090/'

export const getAllDepartments = () => axios.get(DEPARTMENT_REST_API_BASE_URL + 'getAllDepartments');

export const createDepartment = (department) => axios.post(DEPARTMENT_REST_API_BASE_URL + 'addDepartment', department);

export const getDepartment = (departmentId) => axios.get(DEPARTMENT_REST_API_BASE_URL + 'getDepartment/' + departmentId);

export const updateDepartment = (departmentId, department) => axios.put(DEPARTMENT_REST_API_BASE_URL + 'updateDepartment/' + departmentId, department);

export const deleteDepartment = (departmentId) => axios.delete(DEPARTMENT_REST_API_BASE_URL + 'deleteDepartment/' + departmentId);