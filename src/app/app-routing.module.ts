import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
<<<<<<< HEAD

import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  
  {path: 'products', component: ProductsComponent},

  {path: '', redirectTo: 'home', pathMatch: 'full'},
=======
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { AdministrarProductosComponent } from './components/administrar-productos/administrar-productos.component';
import { SesionComponent } from './components/sesion/sesion.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: 'ventas', component: VentasComponent },
  { path: 'administrar', component: AdministrarProductosComponent, canActivate:[AuthGuard], canLoad:[AuthGuard]},
  { path: 'sesion', component: SesionComponent },

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
>>>>>>> main

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
