import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { E404Component } from './components/e404/e404.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { AdministrarProductosComponent } from './components/administrar-productos/administrar-productos.component';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { SesionComponent } from './components/sesion/sesion.component';
import { RegistroComponent } from './components/registro/registro.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContactosComponent,
    E404Component,
    NosotrosComponent,
    AdministrarProductosComponent,
    CartComponent,
    SesionComponent,
    RegistroComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
