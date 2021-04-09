import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { EventosComponent } from './eventos/eventos.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { DisplayComponent } from './to-do/display/display.component';
import { ListComponent } from './to-do/list/list.component';
import { FormComponent } from './to-do/form/form.component';
import { EditTaskComponent } from './to-do/edit-task/edit-task.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    EventosComponent,
    CronometroComponent,
    CalculadoraComponent,
    DisplayComponent,
    ListComponent,
    FormComponent,
    EditTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
