package com.ems.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.ems.dto.DepartmentDto;
import com.ems.exception.ResourceNotFoundException;
import com.ems.mapper.DepartmentMapper;
import com.ems.model.Department;
import com.ems.repository.DepartmentRepository;
import com.ems.service.DepartmentService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class DepartmentServiceImpl implements DepartmentService{
	
	private DepartmentRepository deptRepo;
	
	
	@Override
	public DepartmentDto createDepartment(DepartmentDto departmentDto) {
		Department department = DepartmentMapper.mapToDepartment(departmentDto);
		Department savedDepartment = deptRepo.save(department);
		return DepartmentMapper.mapToDepartmentDto(savedDepartment);
	}


	@Override
	public DepartmentDto getDepartmentById(Long departmentId) {
		Department department = deptRepo.findById(departmentId).orElseThrow(() -> new ResourceNotFoundException("Department not found with given id : " + departmentId));
		return DepartmentMapper.mapToDepartmentDto(department);
	}


	@Override
	public List<DepartmentDto> getAllDepartments() {
		List<Department> departments = deptRepo.findAll();
		return departments.stream().map((department) -> DepartmentMapper.mapToDepartmentDto(department)).collect(Collectors.toList());
	}


	@Override
	public DepartmentDto updateDepartment(Long departmentId, DepartmentDto updatedDepartment) {
		Department department = deptRepo.findById(departmentId).orElseThrow(() -> new ResourceNotFoundException("Department not found with given id : " + departmentId));
		department.setDepartmentName(updatedDepartment.getDepartmentName());
		department.setDepartmentDescription(updatedDepartment.getDepartmentDescription());
		Department updatedDepartmentObj = deptRepo.save(department);
		return DepartmentMapper.mapToDepartmentDto(updatedDepartmentObj);
	}


	@Override
	public void deleteDepartment(Long departmentId) {
		deptRepo.findById(departmentId).orElseThrow(() -> new ResourceNotFoundException("Department not found with given id : " + departmentId ));
		deptRepo.deleteById(departmentId);
	}

}
