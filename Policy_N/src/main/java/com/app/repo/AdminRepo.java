package com.app.repo;



import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.model.Admin;

@Repository
public interface AdminRepo extends JpaRepository<Admin,String>{
	
	@Query("SELECT a FROM Admin a WHERE a.policyid = ?1")
	Optional<Admin> findPolicyById(String policyid);

	@Query("SELECT a FROM Admin a WHERE a.policyname = ?1")
	List<Admin> findPolicyByName(String policyname);

	@Query("SELECT a FROM Admin a WHERE a.duration = ?1")
	List<Admin> findPolicyByDuration(String duration);

	@Query("SELECT a FROM Admin a WHERE a.company = ?1")
	List<Admin> findPolicyByCompany(String company);	

	@Query("SELECT a FROM Admin a WHERE a.policytype = ?1")
	List<Admin> findPolicyByType(String policytype);

}
