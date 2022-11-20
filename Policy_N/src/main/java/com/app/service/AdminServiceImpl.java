package com.app.service;
import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.model.Admin;
import com.app.repo.AdminRepo;

@Service
public class AdminServiceImpl implements AdminService{

	@Autowired
    AdminRepo adminrepo;
	
	public AdminServiceImpl(AdminRepo adminrepo)
	{
		this.adminrepo=adminrepo;
	}
	
	@Override
	public Admin registerPolicy(Admin admin)
	{
		return adminrepo.save(admin);
	}
	
	@Override
	public List<Admin> getAll() {	
	return adminrepo.findAll();

	}
	
	@Override
	public Admin getPolicyByid(String policyid)
	{
		Admin admin = null;
		admin=this.adminrepo.findPolicyById(policyid).orElse(new Admin());
		return admin;
	}
	
	@Override 
	public List<Admin> getPolicyByName(String policyname)
	{
		List<Admin> admin=new LinkedList<>();
		admin=this.adminrepo.findPolicyByName(policyname);
		return admin;
	}
	
	@Override 
	public List<Admin> getPolicyByDuration(String duration)
	{
		List<Admin>  admin=new LinkedList<>();
		admin=this.adminrepo.findPolicyByDuration(duration);
		return admin;
	}
	
	@Override 
	public List<Admin> getPolicyByCompany(String company)
	{
		List<Admin>  admin=new LinkedList<>();
		admin=this.adminrepo.findPolicyByCompany(company);
		return admin;
	}
	
	@Override 
	public List<Admin> getPolicyByType(String policytype)
	{
		List<Admin>  admin=new LinkedList<>();
		admin=this.adminrepo.findPolicyByType(policytype);
		return admin;
	}
	
}

