import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { E404Component } from './components/e404/e404.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
<<<<<<< HEAD
import { CombosComponent } from './components/combos/combos.component';
import { AdministrarProductosComponent } from './components/administrar-productos/administrar-productos.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './components/cart/cart.component';
=======
import { PrecioComponent } from './components/precio/precio.component';

>>>>>>> Jvera

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContactosComponent,
    E404Component,
    NosotrosComponent,
<<<<<<< HEAD
    CombosComponent,
    AdministrarProductosComponent,
    CartComponent,
=======
    PrecioComponent

>>>>>>> Jvera
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
