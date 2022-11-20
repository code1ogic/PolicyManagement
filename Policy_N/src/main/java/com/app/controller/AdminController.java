package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.Admin;
import com.app.service.AdminService;

//@Slf4j
@RestController
@RequestMapping("/api/v1.0")
@CrossOrigin("*")
public class AdminController {
	
	@Autowired
	private AdminService adminService;
	
	@PostMapping(path="/admin")
	public Admin registerPolicy(@RequestBody Admin admin) {
		
		return adminService.registerPolicy(admin);
	}
	
	@GetMapping("/admin")
	public List<Admin> getAll() {
		return adminService.getAll();
	}
	
	
	//@ApiOperation(value="Search policy by id",response="Admin.class")
	@GetMapping(path="/searchPolicyById/{policyid}")
	public Admin getPolicyById(@PathVariable("policyid")final String policyid) {
		return this.adminService.getPolicyByid(policyid);
	}

	@GetMapping(path="/searchPolicyByName/{policyname}")
	public List<Admin> getPolicyByName(@PathVariable("policyname")final String policyname) {
		return this.adminService.getPolicyByName(policyname);
	}


	@GetMapping(path="/searchPolicyByDuration/{duration}")
	public List<Admin> findPolicyByDuration(@PathVariable("duration")final String duration) {
		return this.adminService.getPolicyByDuration(duration);
	}

	@GetMapping(path="/searchPolicyByCompany/{company}")
	public List<Admin> findPolicyByCompany(@PathVariable("company")final String company) {
		return this.adminService.getPolicyByCompany(company);
	}

	@GetMapping(path="/searchPolicyByType/{type}")
	public List<Admin> findPolicyByType(@PathVariable("type")final String type) {
		System.out.println(type);
		return this.adminService.getPolicyByType(type);
	}
	
}
