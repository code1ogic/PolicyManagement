/*import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


export class Admin {
  constructor(
    public policyid:string,
    public policyname:string,
    public date:string,
    public duration:string,
    public company:string,
    public initialdeposit:string,
    public policytype:string,
    public usertype:string,
    public termsperyear:string,
    public termamount:string,
    public interest:string
  ){}

}

@Component({

  selector: 'app-search-policy',
  templateUrl: './search-policy.component.html',
  styleUrls: ['./search-policy.component.css']
})
export class SearchPolicyComponent implements OnInit {

  admin: Admin[] = [];

  constructor(
    private httpClient:HttpClient
    ) { }

  ngOnInit(): void {
    this.getAdmin();
  }
  getAdmin(){
    this.httpClient.get<any>('https://localhost:8082/admin').subscribe(
      response =>{
        console.log(response);
        this.admin=response;
      }
    );
  }
}*/





















/*export class Admin {
  constructor(
  public policyid:string,
  public policyname:string,
  public date:string,
  public duration:string,
  public company:string,
  public initialdeposit:string,
  public policytype:string,
  public usertype:string,
  public termsperyear:string,
  public termamount:string,
  public interest:string
  ){}
}*/



import { Component, OnInit } from '@angular/core';
import { SearchpolicyService } from '../searchpolicy.service';
import { Admin } from '../admin';
import { PolicyService } from '../policy.service';

@Component({

  selector: 'app-search-policy',
  templateUrl: './search-policy.component.html',
  styleUrls: ['./search-policy.component.css']
})
export class SearchPolicyComponent implements OnInit {

  admin:Admin =new Admin();
  policyList : Admin[] = [];

  constructor(private policyService: PolicyService, private searchPolicy : SearchpolicyService) { }

  ngOnInit(): void {
    this.policyList = [];
    this.getAllPolicy();
  }

  policyRegister(){
    console.log(this.admin);
    this.policyService.policyRegister(this.admin).subscribe(data =>{
      alert("successfull")
    },error=>alert("error!!!"));
  }

  getAllPolicy() {
    this.searchPolicy.getAllPolicies().subscribe(res => {
      this.policyList = res;
      console.log(this.policyList);
    })
  }

  getPolicyByName(){
    const searchTxt = this.admin.policyname;
    this.admin = new Admin();
    this.admin.policyname = searchTxt;
    this.searchPolicy.getPolicyByName(this.admin.policyname).subscribe(res => {
      this.policyList = res;
    })
  }

  getPolicyById(){
    const searchTxt = this.admin.policyid;
    this.admin = new Admin();
    this.admin.policyid = searchTxt;
    this.searchPolicy.getPolicyById(this.admin.policyid).subscribe(res => {
      this.policyList = [];
      this.policyList.push(res);
    })
  }

  getPolicyByDuration(){
    const searchTxt = this.admin.duration;
    this.admin = new Admin();
    this.admin.duration = searchTxt;
    this.searchPolicy.getPolicyByDuration(this.admin.duration).subscribe(res => {
      this.policyList = res;
    })
  }

  getPolicyByCompany(){
    const searchTxt = this.admin.company;
    this.admin = new Admin();
    this.admin.company = searchTxt;
    this.searchPolicy.getPolicyByCompany(this.admin.company).subscribe(res => {
      this.policyList = res;
    })
  }

  getPolicyByType(){
    const searchTxt = this.admin.policytype;
    this.admin = new Admin();
    this.admin.policytype = searchTxt;
    this.searchPolicy.getPolicyByType(this.admin.policytype).subscribe(res => {
      this.policyList = res;
    })
  }

}
