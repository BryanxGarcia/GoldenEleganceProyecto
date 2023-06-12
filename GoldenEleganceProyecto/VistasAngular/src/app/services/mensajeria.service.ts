import { Mensajeria } from './../models/mensajeria.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MensajeriaService {

  private baseUrl:string = "https://localhost:44397/api/Email/"
  constructor(private http: HttpClient) { }


  enviarcontacto(Mensajeria: any){
     return this.http.post<any>(`${this.baseUrl}SendEmailContacto`, Mensajeria);
  }

}

