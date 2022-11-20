package com.app.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name ="registration")
public class User {
	
		@Id
		private String email;
		
	    private String firstname;
	    private String lastname;
	    private String dob;
	    private String address;
	    private String contactnumber;
	    private String salary;
	    private String pannumber;
	    private String employertype;
}
