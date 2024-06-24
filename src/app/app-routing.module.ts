import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableroComponent } from './componente/tablero/tablero.component';
import { LoginComponent } from './componente/login/login.component';
import { RegistroComponent } from './componente/registro/registro.component';
import { ConfiguracionComponent } from './componente/configuracion/configuracion.component';
import { EditarClienteComponent } from './componente/editar-cliente/editar-cliente.component';
import { NoEncontradoComponent } from './componente/no-encontrado/no-encontrado.component';

const routes: Routes = [
  {path: '', component: TableroComponent},
  {path: 'logiin', component: LoginComponent},
  {path: 'registrarse', component: RegistroComponent},
  {path: 'confguracion', component: ConfiguracionComponent},
  {path: 'cliente/editar/:id', component: EditarClienteComponent},
  {path: '**', component: NoEncontradoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
