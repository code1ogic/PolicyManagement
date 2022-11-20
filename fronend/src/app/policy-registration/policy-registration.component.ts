import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { PolicyService } from '../policy.service';

@Component({
  selector: 'app-policy-registration',
  templateUrl: './policy-registration.component.html',
  styleUrls: ['./policy-registration.component.css']
})
export class PolicyRegistrationComponent implements OnInit {

  admin:Admin =new Admin();

  constructor(private policyService: PolicyService) { }

  ngOnInit(): void {
  }

  policyRegister(){
    console.log(this.admin);
    this.policyService.policyRegister(this.admin).subscribe(data=>{
      alert("Dear Admin,\n\nThe policy is Successfully registered \nThe policy <policy id> is available to the users from <policy start date> to <policy end date> \nThis is the <n>th policy in the<policy type>.To add more click<Policy Registration>.")
    },error=>alert("Sorry Policy not Registered!!!"));
  }
}
