import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';
import { Search } from './search';

@Injectable({
  providedIn: 'root'
})
export class SearchpolicyService {
  baseUrl="http://localhost:8082/admin"
  getAllPolicyURL : string = "http://localhost:8082/api/v1.0/admin"
  searchPolicyByName : string = "http://localhost:8082/api/v1.0/searchPolicyByName/"
  searchPolicyById : string = "http://localhost:8082/api/v1.0/searchPolicyById/"
  searchPolicyByDuration : string = "http://localhost:8082/api/v1.0/searchPolicyByDuration/"
  searchPolicyByCompany : string = "http://localhost:8082/api/v1.0/searchPolicyByCompany/"
  searchPolicyByType : string = "http://localhost:8082/api/v1.0/searchPolicyByType/"
  constructor(private httpClient: HttpClient) {

   }

  policyRegister(admin :Admin):Observable<object>{
    console.log(admin);
    return this.httpClient.post(`${this.baseUrl}`,admin);

  }

  getPolicyById(policyName : String) : Observable<Admin> {
    return this.httpClient.get<Admin>(this.searchPolicyById+policyName);
  }

  getPolicyByName(policyName : String) : Observable<Admin[]> {
    return this.httpClient.get<Admin[]>(this.searchPolicyByName+policyName);
  }

  getPolicyByDuration(policyName : String) : Observable<Admin[]> {
    return this.httpClient.get<Admin[]>(this.searchPolicyByDuration+policyName);
  }

  getPolicyByCompany(policyName : String) : Observable<Admin[]> {
    return this.httpClient.get<Admin[]>(this.searchPolicyByCompany+policyName);
  }

  getPolicyByType(policyName : String) : Observable<Admin[]> {
    return this.httpClient.get<Admin[]>(this.searchPolicyByType+policyName);
  }

  getAllPolicies() : Observable<Admin[]>{
    return this.httpClient.get<Admin[]>(this.getAllPolicyURL);
  }

}
