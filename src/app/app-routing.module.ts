import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableroComponent } from './componente/tablero/tablero.component';
import { LoginComponent } from './componente/login/login.component';
import { RegistroComponent } from './componente/registro/registro.component';
import { ConfiguracionComponent } from './componente/configuracion/configuracion.component';
import { EditarClienteComponent } from './componente/editar-cliente/editar-cliente.component';
import { NoEncontradoComponent } from './componente/no-encontrado/no-encontrado.component';
import { AuthGuard } from './guardianes/auth.guard';
import { ConfiguracionGuard } from './guardianes/configracio.guard';

const routes: Routes = [
  {path: '', component: TableroComponent,canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'registrarse', component: RegistroComponent,canActivate:[ConfiguracionGuard]},
  {path: 'configuracion', component: ConfiguracionComponent,canActivate:[AuthGuard]},
  {path: 'cliente/editar/:id', component: EditarClienteComponent,canActivate:[AuthGuard]},
  {path: '**', component: NoEncontradoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
