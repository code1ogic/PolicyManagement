import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { LoginDetails } from '../login-details';
import { AuthenticationResponse } from '../authentication-response';
import { LoginService } from '../login.service';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login-module',
  templateUrl: './login-module.component.html',
  styleUrls: ['./login-module.component.css']
})
export class LoginModuleComponent implements OnInit {
  token!: string;
  errMsg!: string;
  login : Login={
    'userid':" ",
    'upassword':" ",
    'uname':"admin"
  };
  loginDtls!:LoginDetails

  authResponse:AuthenticationResponse ={
    'userid':"",   //here
    'name':"",
    'valid':false
  };
  constructor(private loginService:LoginService,private authService:AuthService,private router:Router,private route: ActivatedRoute) { 

  }

  ngOnInit(): void {}
  onLogin(custForm:NgForm)
  {
    console.log(custForm.value.userid);
    console.log(custForm.value.password);
    this.login.userid=custForm.value.userid;
    this.login.upassword=custForm.value.password;
    this.login.uname="admin";
    this.loginService.loginMember(this.login).subscribe(data => {
      this.errMsg='';
      console.log(data);

      this.loginDtls= data as LoginDetails;
      localStorage.setItem("userId", this.loginDtls.userid);
      localStorage.setItem("token", this.loginDtls.authToken);
      console.log(this.loginDtls.authToken);
      let response=this.loginService.validateToken(this.loginDtls.authToken);
      response.subscribe(data1=>{
        console.log(data1);
        this.authResponse=data1 as AuthenticationResponse;
        console.log(this.authResponse.name, this.authResponse.valid);
        if(this.authResponse.valid){
          console.log("true valid");
          this.authService.login()

        }
        else{
          console.log("false valid");
          this.authService.logout();
        }
        if(this.authService.isLoggedIn()){
          localStorage.setItem('userId',this.authResponse.userid);
          this.router.navigate(['home']);
        }

      });

    }, error=>{
      
      this.errMsg = "Invalid Credentials!"
  })
  custForm.reset();
}

}
