package com.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="policy")
public class Admin {
	
	@Id 
	@GeneratedValue(generator="system-uuid")
	@GenericGenerator(name="system-uuid", strategy = "uuid")
	private String policyid;
	
	//@NonNull
	private  String policyname;
	//@NonNull
	private  String date;
	//@NonNull
	private  String duration;
	//@NonNull
	private  String company;
	//@NonNull
	private  String initialdeposit;
	//@NonNull
	private  String policytype;
	//@NonNull
	private  String usertype;
	//@NonNull
	private  String termsperyear;
	//@NonNull
	private  String termamount;
	//@NonNull
	private  String interest;
	
	public String getPolicyid() {
		return policyid;
	}

	public String getPolicyname() {
		return policyname;
	}
	
	public String getDate() {
		return date;
	}
	
	public String getDuration() {
		return duration;
	}

	public String getCompany() {
		return company;
	}
	
	public String getPolicytype() {
		return policytype;
	}

	public String getInitialdeposit() {
		return initialdeposit;
	}
	
	public String getUsertype() {
		return usertype;
	}
	
	public String getTermsperyear() {
		return termsperyear;
	}

	public String getInterest() {
		return interest;
	}
	
	public String getTermamount() {
		return termamount;
	}
	
	public void setPolicyid(String policyid) {
		this.policyid = policyid;
	}

	public void setPolicyname(String policyname) {
		this.policyname = policyname;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public void setInitialdeposit(String initialdeposit) {
		this.initialdeposit = initialdeposit;
	}

	public void setPolicytype(String policytype) {
		this.policytype = policytype;
	}

	public void setUsertype(String usertype) {
		
		
		this.usertype = usertype;
	}
	
	public void setTermsperyear(String termsperyear) {
		this.termsperyear = termsperyear;
	}

	public void setTermamount(String termamount) {
		this.termamount = termamount;
	}

	public void setInterest(String interest) {
		this.interest = interest;
	}
	
	
	
}
