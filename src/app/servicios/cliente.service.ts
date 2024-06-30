import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { cliente } from "../modelo/cliente.model";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators'; // Importa el operador map


@Injectable()
export class cLienteServicio{
    clientesColeccion: AngularFirestoreCollection<cliente>;
    clienteDoc:AngularFirestoreDocument<cliente> | undefined;
    clientes:Observable<cliente[]> | undefined;
    cliente:Observable<cliente> | undefined;

    constructor(private db:AngularFirestore){
        this.clientesColeccion = db.collection('clientes',ref =>ref.orderBy('nombre','asc'));
        

    }

    getClientes(): Observable<cliente[]>{
        //obtener cliente
        this.clientes = this.clientesColeccion.snapshotChanges().pipe(
            map( cambios => {
                return cambios.map( accion => {
                    const datos = accion.payload.doc.data() as cliente;
                    datos.id = accion.payload.doc.id;
                    return datos;
                })
            })
        );
        return this.clientes;
    }

}