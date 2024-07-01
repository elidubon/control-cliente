import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { cliente } from 'src/app/modelo/cliente.model';
import { cLienteServicio } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit{

  cliente:cliente={
    nombre:'',
    apellido:'',
    email:'',
    saldo:0
  }

  id:string;
  formError: string | null = null;

  constructor(private clientesServicio: cLienteServicio, 
    private toastr: ToastrService,
    private router:Router, 
    private route: ActivatedRoute
      ){ }

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.clientesServicio.getCLiente(this.id).subscribe( cliente =>{
      this.cliente = cliente;
    }) 
  }
  guardar({value,valid}:NgForm){
    //const commands: any[] = ['/'];
    if(!valid){
      this.formError = 'Por favor llene el formulario correctamente';
      setTimeout(() => {
        this.formError = null;
      }, 4000); // Ocultar el mensaje después de 4 segundos
    }else{
      value.id = this.id;
      this.clientesServicio.modificarCliente(value);
      this.router.navigate(['/']);
    }
  }

  eliminar(){
    //const commands: any[] = ['/'];
    if(confirm('¿seguro que desea eliminar el cliente?')){
      this.clientesServicio.eliminarCLiente(this.cliente);
      this.router.navigate(['/']);
    }
  }
}
