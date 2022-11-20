package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.model.User;
import com.app.repo.UserRepo;

@Service
public class UserServiceImpl implements UserService{
	
	private UserRepo userRepo;
	
	@Autowired
	public UserServiceImpl(UserRepo userRepo)
	{
		this.userRepo=userRepo;
	}
	
	@Override
	public User registerUser(User user)
	{
		return userRepo.save(user);
	}
}
