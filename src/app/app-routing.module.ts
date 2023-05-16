import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { CombosComponent } from './components/combos/combos.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { AdministrarProductosComponent } from './components/administrar-productos/administrar-productos.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'contactos', component: ContactosComponent},
  {path: 'combos', component: CombosComponent},
  {path: 'ventas', component: VentasComponent},
  {path: 'administrar', component: AdministrarProductosComponent},


  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
