import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string = "https://localhost:44397/api/Authentication/"

  constructor(private http: HttpClient) { }

  signUp(userObj: any){
     return this.http.post<any>(`${this.baseUrl}Registro`, userObj);
  }

  login(userLog: any){
    return this.http.post<any>(`${this.baseUrl}Login`, userLog);

  }
}
