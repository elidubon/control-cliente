import { AngularFireAuth } from "@angular/fire/compat/auth";
import { CanActivate, Router } from "@angular/router";
import { ConfiguracionServicio } from "../servicios/configuracion.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {  map } from "rxjs/operators";

@Injectable()
export class ConfiguracionGuard implements CanActivate{

    constructor(
        private router: Router,
        //private afAuth: AngularFireAuth,
        private connfiguracionServicio: ConfiguracionServicio
    ){}

    canActivate(): Observable<boolean >{
        return this.connfiguracionServicio.getConfiguracion().pipe(
            map(configuracion => {
                if(configuracion.permitirRegistro){
                    return true;
                }else{
                    this.router.navigate(['/login']);
                    return false;
                }
            })
        )
    }

}