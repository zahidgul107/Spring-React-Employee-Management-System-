package com.ems.service;

import java.util.List;

import com.ems.dto.DepartmentDto;
import com.ems.dto.EmployeeDto;

public interface DepartmentService {

	DepartmentDto createDepartment(DepartmentDto departmentDto);

	DepartmentDto getDepartmentById(Long departmentId);

	List<DepartmentDto> getAllDepartments();

	DepartmentDto updateDepartment(Long departmentId, DepartmentDto updatedDepartment);

	void deleteDepartment(Long departmentId);

}
