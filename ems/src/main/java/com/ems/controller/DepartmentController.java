package com.ems.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ems.dto.DepartmentDto;
import com.ems.dto.EmployeeDto;
import com.ems.service.DepartmentService;

import lombok.AllArgsConstructor;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/")
public class DepartmentController {
	
	private DepartmentService deptSer;
	
	@PostMapping("/addDepartment")
	public ResponseEntity<DepartmentDto> createDepartment(@RequestBody DepartmentDto departmentDto) {
		DepartmentDto department = deptSer.createDepartment(departmentDto);
		return new ResponseEntity<>(department, HttpStatus.CREATED);
	}
	
	@GetMapping("getDepartment/{id}")
	public ResponseEntity<DepartmentDto> getDepartmentById(@PathVariable("id") Long departmentId) {
		DepartmentDto departmentDto = deptSer.getDepartmentById(departmentId);
		return ResponseEntity.ok(departmentDto);
	}
	
	@GetMapping("getAllDepartments")
	public ResponseEntity<List<DepartmentDto>> getAllDepartments() {
		List<DepartmentDto> departments = deptSer.getAllDepartments();
		return ResponseEntity.ok(departments);
	}
	
	@PutMapping("updateDepartment/{id}")
	public ResponseEntity<DepartmentDto> updateDepartment(@PathVariable("id") Long departmentId,@RequestBody DepartmentDto updatedDepartment) {
		DepartmentDto departmentDto = deptSer.updateDepartment(departmentId, updatedDepartment);
		return ResponseEntity.ok(departmentDto);
	}
	
	@DeleteMapping("deleteDepartment/{id}")
	public ResponseEntity<String> deleteDepartment(@PathVariable("id") Long departmentId) {
		deptSer.deleteDepartment(departmentId);
		return ResponseEntity.ok("Department deleted successfully!.");
	}

}
