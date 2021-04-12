import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { DisplayComponent } from './to-do/display/display.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'toDo'},
  {path: 'toDo', component: DisplayComponent },
  {path: 'calculate', component: CalculadoraComponent },
  {path: 'cronometro', component: CronometroComponent },
  {path: '**', redirectTo: 'toDo'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
