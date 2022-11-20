import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  baseUrl="http://localhost:8082/admin"
  constructor(private httpClient: HttpClient) { 

  }

  policyRegister(admin :Admin):Observable<object>{
    console.log(admin);
    return this.httpClient.post(`${this.baseUrl}`,admin);

  }
  
}
