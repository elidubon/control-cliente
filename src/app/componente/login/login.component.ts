import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

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

  login(){
    this.loginService.login(this.email,this.password)
      .then( res =>{
        this.router.navigate(['/']);
      })
      .catch(error => {
        this.formError = 'El Usuario ingresado no existe';
        setTimeout(() => {
          this.formError = null;
        }, 4000);
        })
  }

}
