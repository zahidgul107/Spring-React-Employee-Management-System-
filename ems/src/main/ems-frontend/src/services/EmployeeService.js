import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8090/'

export const listEmployees = () => axios.get(REST_API_BASE_URL + 'getAllEmployee');

export const createEmployee = (employee) => axios.post(REST_API_BASE_URL + 'addEmployee', employee);

export const getEmployee = (employeeId) => axios.get(REST_API_BASE_URL + 'getEmployee/' + employeeId);

export const updateEmployee = (employeeId, employee) => axios.put(REST_API_BASE_URL + 'updateEmployee/' + employeeId, employee);

export const deleteEmployee = (employeeId) => axios.delete(REST_API_BASE_URL + 'deleteEmployee/' + employeeId);