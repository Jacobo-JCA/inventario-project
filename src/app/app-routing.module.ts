import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { AdministrarProductosComponent } from './components/administrar-productos/administrar-productos.component';
import { SesionComponent } from './components/sesion/sesion.component';
import { AuthGuard } from './guards/auth.guard';
import { FormComponent } from './components/form/form.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: 'ventas', component: VentasComponent },
  { path: 'administrar', component: AdministrarProductosComponent, canActivate:[AuthGuard], canLoad:[AuthGuard]},
  { path: 'sesion', component: SesionComponent },
  {path: 'form', component: FormComponent},

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
