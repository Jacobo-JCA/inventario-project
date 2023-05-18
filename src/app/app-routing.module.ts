import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SesionComponent } from './components/sesion/sesion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { ContactosComponent } from './components/contactos/contactos.component'
import { AdministrarProductosComponent } from './components/administrar-productos/administrar-productos.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: 'ventas', component: VentasComponent},
  { path: 'administrar', component: AdministrarProductosComponent, canActivate:[AuthGuard]},
  { path: 'sesion', component: SesionComponent },
  { path: 'registro', component: RegistroComponent},

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
