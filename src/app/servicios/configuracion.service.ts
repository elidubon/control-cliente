import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { configuracion } from "../modelo/configuracion.model";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class ConfiguracionServicio{
    configuracionDoc: AngularFirestoreDocument<configuracion>;
    configuracion: Observable<configuracion>;

    //id unico de la collecion de configuracion
    id='1';

    constructor(private db:AngularFirestore){}

    getConfiguracion():Observable<configuracion>{
        this.configuracionDoc = this.db.doc<configuracion>(`configuracion/${this.id}`);
        this.configuracion = this.configuracionDoc.valueChanges() as any;
        return this.configuracion;
    }

    modificarConfiguracion(configuracion:configuracion){
        this.configuracionDoc = this.db.doc<configuracion>(`configuracion/${this.id}`);
        this.configuracionDoc.update(configuracion);
    }
}