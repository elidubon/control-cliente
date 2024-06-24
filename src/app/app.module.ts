import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule, SETTINGS } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
//import { FlashMessagesModule } from '@angular2-flash-messages';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule} from 'angular2-flash-messages/module';
**/

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

