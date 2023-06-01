import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './auth/pages/login/login.component';
import { ResetPasswordComponent } from './auth/pages/reset-password/reset-password.component';
import { ContactanosComponent } from './auth/pages/contactanos/contactanos.component';
import { FichaProductoComponent } from './base-admin/pages/ficha-producto/ficha-producto.component';
import { HistorialComponent } from './base-admin/pages/historial/historial.component';
import { FavoritosComponent } from './base-admin/pages/favoritos/favoritos.component';
import { CarritoCompraComponent } from './base-admin/pages/carrito-compra/carrito-compra.component';
import { PerfilUsuarioComponent } from './base-admin/pages/perfil-usuario/perfil-usuario.component';
import { InicioComponent } from './base-admin/pages/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPasswordComponent,
    ContactanosComponent,
    FichaProductoComponent,
    HistorialComponent,
    FavoritosComponent,
    CarritoCompraComponent,
    PerfilUsuarioComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
