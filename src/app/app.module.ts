import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { EquiposAgregarComponent } from './equipos/equipos-agregar/equipos-agregar.component';
import { EquiposListarComponent } from './equipos/equipos-listar/equipos-listar.component';
import { PartidosGeneradorComponent } from './partidos/partidos-generador/partidos-generador.component';


@NgModule({
  declarations: [
    AppComponent,
    EquiposAgregarComponent,
    EquiposListarComponent,
    PartidosGeneradorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
