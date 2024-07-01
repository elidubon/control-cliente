import { Injectable, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { cliente } from '../modelo/cliente.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Importa el operador map

@Injectable()
export class cLienteServicio implements OnInit {
  clientesColeccion: AngularFirestoreCollection<cliente>;
  clienteDoc: AngularFirestoreDocument<cliente>;
  clientes: Observable<cliente[]>;
  cliente: Observable<cliente>;

  constructor(private db: AngularFirestore) {
    this.clientesColeccion = db.collection('clientes', (ref) =>
      ref.orderBy('nombre', 'asc')
    );
  }
  ngOnInit() {}
  getClientes(): Observable<cliente[]> {
    //obtener cliente
    this.clientes = this.clientesColeccion.snapshotChanges().pipe(
      map((cambios) => {
        return cambios.map((accion) => {
          const datos = accion.payload.doc.data() as cliente;
          datos.id = accion.payload.doc.id;
          return datos;
        });
      })
    );
    return this.clientes;
  }
  agregarCliente(cliente: cliente) {
    this.clientesColeccion.add(cliente);
  }

  getCLiente(id:string):Observable<cliente>{
    this.clienteDoc = this.db.doc<cliente>(`clientes/${id}`);
    return this.cliente = this.clienteDoc.snapshotChanges().pipe(
        map( accion => {
            if(accion.payload.exists === false){
                return null;
            }else{
                const datos = accion.payload.data() as cliente;
                datos.id = accion.payload.id;
                return datos as any;
            }
        })
    );
   //return this.cliente;
  }
  modificarCliente(cliente:cliente){
    this.clienteDoc = this.db.doc(`clientes/${cliente.id}`);
    this.clienteDoc.update(cliente);
  }
  eliminarCLiente(cliente:cliente){
    this.clienteDoc = this.db.doc(`clientes/${cliente.id}`);
    this.clienteDoc.delete();
  }
}
