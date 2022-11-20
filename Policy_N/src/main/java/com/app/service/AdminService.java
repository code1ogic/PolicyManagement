package com.app.service;

import java.util.List;

import com.app.model.Admin;

public interface AdminService {


	List<Admin> getAll();
	
	Admin registerPolicy(Admin admin);

	Admin getPolicyByid(String policyid);

	List<Admin>  getPolicyByName(String policyname);

	List<Admin>  getPolicyByDuration(String duration);

	List<Admin>  getPolicyByCompany(String company);

	List<Admin>  getPolicyByType(String policytype);


}
