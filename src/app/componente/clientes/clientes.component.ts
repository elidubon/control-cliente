import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { timeout } from 'rxjs';
import { cliente } from 'src/app/modelo/cliente.model';
import { cLienteServicio } from 'src/app/servicios/cliente.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{
  //clientes: any;
  //clientes: cliente[];
  clientes:cliente[]= [];
  formError: string | null = null;
  cliente:cliente={
    nombre:'',
    apellido:'',
    email:'',
    saldo:0
  }

  //@ViewChild("clienteForm") clienteForm:NgForm;
  @ViewChild('botonCerrar') botonCerrar!:ElementRef;
  


  constructor(private clientesServicio: cLienteServicio, private toastr: ToastrService){ }

  ngOnInit(){
    this.clientesServicio.getClientes().subscribe( 
      Clientes => {
        this.clientes = Clientes;
        console.log('Clientes cargados:', this.clientes);
      }
    );
  }

  getSaldoTotal():number{
    let saldoTotal: number = 0;
    console.log('Clientes cargados1:', this.clientes);
    if(this.clientes && this.clientes.length > 0){
      this.clientes.forEach((cliente: any) => {
        console.warn('wwwwww'+cliente.saldo);
        if (cliente.saldo !== undefined) {
          saldoTotal += cliente.saldo;
        }
        console.warn('rrrrrr',saldoTotal);
      });
    }
    console.log('Saldo total:', saldoTotal);
    return saldoTotal;
  }

  agregar(form: NgForm){
    if(!form.valid){
      this.formError = 'Por favor llene el formulario correctamente';
      setTimeout(() => {
        this.formError = null;
      }, 4000); // Ocultar el mensaje después de 4 segundos
    }else{
      //agregar el nnuevo cliente
      this.clientesServicio.agregarCliente(form.value);
      form.resetForm(); // Reiniciar el formulario
      this.cerrarModal();
    }
  }
  private cerrarModal(){
    this.botonCerrar.nativeElement.click();
  }
}
