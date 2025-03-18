import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiLogin = "https://reqres.in/api/login";
  private apiRegister = "https://reqres.in/api/register";

  constructor(private http: HttpClient) { }
  
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(this.apiLogin, credentials);
  }
  
  register(credentials: {email: string; password: string }): Observable<any> {
    return this.http.post(this.apiRegister, credentials);
  }
}
