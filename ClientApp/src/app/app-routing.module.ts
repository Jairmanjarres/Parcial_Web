import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReservacionaConsultaComponent } from './parcial/reservaciona-consulta/reservaciona-consulta.component';
import { PersonaRegistroComponent } from './parcial/persona-registro/persona-registro.component';
const routes: Routes = [
  {
    path: 'reservacionaConsulta',
    component: ReservacionaConsultaComponent
  },
  {
    path: 'personaRegistro',
    component: PersonaRegistroComponent
  }
  

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }