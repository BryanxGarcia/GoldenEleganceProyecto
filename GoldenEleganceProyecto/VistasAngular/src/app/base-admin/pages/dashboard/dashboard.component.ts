import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProductsService } from 'src/app/services/productsService/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

public Productos:any=[];

constructor (private productS : ProductsService ){}

ngOnInit() {
    this.productS.getProductos()
    .subscribe(res=>{
      this.Productos = res;
    })
}
}
