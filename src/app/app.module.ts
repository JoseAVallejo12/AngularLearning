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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
