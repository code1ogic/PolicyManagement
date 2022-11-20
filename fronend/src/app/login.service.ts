import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl: string;
  private validateUrl: string;

  constructor(private http:HttpClient) { 
    this.loginUrl='http://localhost:8090/authapp/login';
    this.validateUrl='http://localhost:8090/authapp/validate';
  }
  generateToken(login : Login): Observable<Object>{
    return this.http.post(this.loginUrl, login,{responseType:'text' as 'json'});
  }
  validateToken(token: string){
    const header = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    return this.http.get(`${this.validateUrl}`, header);

  }
  loginMember(login: Login) {
    return this.http.post(`${this.loginUrl}`, login);
  }
}
