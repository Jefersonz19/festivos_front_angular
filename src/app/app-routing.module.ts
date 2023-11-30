import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { FestivosComponent } from './componentes/festivos/festivos.component';


const routes: Routes = [
  {path: "festivos", component: FestivosComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'festivos'},
  // {path: "inicio", component: InicioComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
