import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoCompraComponent } from './pages/carrito-compra/carrito-compra.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { HistorialComponent } from './pages/historial/historial.component';


const routes: Routes = [
  {
    path: 'carrito',
    component: CarritoCompraComponent,
    data: {
      title: 'Carrito de compra',
    }
  },
  {
    path: 'favoritos',
    component: FavoritosComponent,
    data: {
      title: 'Favoritos',
    }
  },
  {
    path: 'historial',
    component: HistorialComponent,
    data: {
      title: 'Historial',
    }
  },
  
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseAdminRoutingModule { }
