import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseAdminRoutingModule } from './base-admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CarritoCompraComponent } from './pages/carrito-compra/carrito-compra.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { FichaProductoComponent } from './pages/ficha-producto/ficha-producto.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PerfilUsuarioComponent } from './pages/perfil-usuario/perfil-usuario.component';
// import { SharedModule } from '../shared/shared.module';
// import { NgxCaptchaModule } from 'ngx-captcha';

@NgModule({
  declarations: [
    CarritoCompraComponent,
    FavoritosComponent,
    FichaProductoComponent,
    HistorialComponent, 
    InicioComponent,
    PerfilUsuarioComponent
  ],
  imports: [
    CommonModule,
    BaseAdminRoutingModule,
    ReactiveFormsModule,
    // SharedModule,
    // NgxCaptchaModule
  ]
})
export class BaseAdminModule { }
