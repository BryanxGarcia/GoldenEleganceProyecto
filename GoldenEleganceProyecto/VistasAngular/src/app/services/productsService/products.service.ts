import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl:string = "https://localhost:44397/api/Productos/"
  constructor(private http: HttpClient, private router: Router) { }

  getProductos(){
    return this.http.get<any>(`${this.baseUrl}productos`);
  }
}
