import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
// private baseUrl:string ="https://localhost:7265/api/Admin/";
private baseUrl:string ="https://localhost:7110/api/Admin/";

constructor(private http:HttpClient) { }

// method for signUp

signUp(adminObj:any){
  return this.http.post<any>(`${this.baseUrl}register`,adminObj)
}

// method for login

login(loginObj:any){
  return this.http.post<any>(`${this.baseUrl}authenticate`,loginObj)
}
}
