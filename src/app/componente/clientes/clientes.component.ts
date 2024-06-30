import { Component } from '@angular/core';
import { cLienteServicio } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  clientes: any;
  constructor(private clientesServicio: cLienteServicio){ }

  ngOnInit(){
    this.clientesServicio.getClientes().subscribe( 
      clientes => {
        this.clientes = clientes;
        console.warn('eeeeeee'+this.clientes);
      }
    )
  }
}
