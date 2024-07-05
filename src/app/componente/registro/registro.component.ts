import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{

  email:string;
  password:string;
  formError: string | null = null;

  constructor(private router:Router,
    private loginService:LoginService,
    private toastr: ToastrService
){ }

ngOnInit() {
  this.loginService.getAuth().subscribe(auth => {
    if(auth){
      this.router.navigate(['/']);
    }
  })
}
 registro(){
  this.loginService.registrarse(this.email, this.password)
    .then( res => {
      this.router.navigate(['/'])
    })
    .catch(error => {
      this.formError = 'El Usuario ingresado no existe';
      setTimeout(() => {
        this.formError = null;
      }, 4000);
      })
 }
}
