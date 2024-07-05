import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import { Observable, map } from "rxjs";
 
@Injectable()
export class AuthGuard {
 
  constructor(private router:Router, private afAuth: AngularFireAuth){}
 
  canActivate(){//: Observable<boolean>
   return this.afAuth.authState.pipe(
    map(auth => {
        if(!auth){//si el usuario no esta logiado
          this.router.navigate(['/login']);
          return false;
        }else{
          return true;
        }
    })
   )
  }
}