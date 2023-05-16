import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { E404Component } from './components/e404/e404.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { PrecioComponent } from './components/precio/precio.component';
import { CombosComponent } from './components/combos/combos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    NavbarComponent,
    ContactosComponent,
    E404Component,
    NosotrosComponent,
    PrecioComponent,
    CombosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
