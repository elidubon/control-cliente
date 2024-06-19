import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceroComponent } from './componente/cabecero/cabecero.component';
import { TableroComponent } from './componente/tablero/tablero.component';
import { ClientesComponent } from './componente/clientes/clientes.component';
import { EditarClienteComponent } from './componente/editar-cliente/editar-cliente.component';
import { LoginComponent } from './componente/login/login.component';
import { RegistroComponent } from './componente/registro/registro.component';
import { ConfiguracionComponent } from './componente/configuracion/configuracion.component';
import { NoEncontradoComponent } from './componente/no-encontrado/no-encontrado.component';
import { PiePaginaComponent } from './componente/pie-pagina/pie-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    TableroComponent,
    ClientesComponent,
    EditarClienteComponent,
    LoginComponent,
    RegistroComponent,
    ConfiguracionComponent,
    NoEncontradoComponent,
    PiePaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
