
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { Router } from "@angular/router";
import { LoginService } from "./login/login.service";
import { CatedraticosComponent } from "./catedraticos-component/catedraticos-component";

@Injectable({
    providedIn: 'root'
})

export class DataServices{
    constructor(private httpClient: HttpClient, private router: Router, private loginService: LoginService){

    }

    guardar_catedratico(catedraticos: CatedraticosComponent[]){
        this.httpClient.put('https://catedraticos-default-rtdb.firebaseio.com/datos.json', catedraticos).subscribe(
            response=>console.log("Se han guardado los catedraticos"),
            error=>console.log('Error ' + error)
        )
    }

    guardar_contactos(contactos: any[]){
        this.httpClient.put('https://catedraticos-default-rtdb.firebaseio.com/contactos.json', contactos).subscribe(
            response=>console.log("Se han guardado los contactos"),
            error=>console.log('Error ' + error)
        )
    }

    cargar_contactos(){
        const token = this.loginService.getIdToken();
        return this.httpClient.get('https://catedraticos-default-rtdb.firebaseio.com/contactos.json?auth=' + token);
    }

    crear_contacto(contacto: any): Promise<any>{
        const token = this.loginService.getIdToken();
        const observable = this.httpClient.post('https://catedraticos-default-rtdb.firebaseio.com/contactos.json?auth=' + token, contacto);
        return lastValueFrom(observable);
    }

    get_contact(id: string){
        const token = this.loginService.getIdToken();
        return this.httpClient.get('https://catedraticos-default-rtdb.firebaseio.com/contactos/' + id + '.json?auth=' + token);
    }

    actualizar_contacto(id: string, contacto: any): Promise<any>{
        let url = 'https://catedraticos-default-rtdb.firebaseio.com/contactos/' + id + '.json';
        const observable = this.httpClient.put(url, contacto);

        return lastValueFrom(observable);
    }

    eliminar_contacto(id: string){
        let url = 'https://catedraticos-default-rtdb.firebaseio.com/contactos/' + id + '.json';
        this.httpClient.delete(url).subscribe(
            response =>console.log('Se ha eliminado el contacto' + response),
            error => console.log('Error: ' + error)
        );
    }

    cargar_catedraticos(){
        const token = this.loginService.getIdToken();
        return this.httpClient.get('https://catedraticos-default-rtdb.firebaseio.com/datos.json?auth=' + token);
    }

    actualizar_catedratico(indice: number, catedratico: CatedraticosComponent): Promise<any>{
        let url = 'https://catedraticos-default-rtdb.firebaseio.com/datos/' + indice + '.json';
        const observable = this.httpClient.put(url, catedratico);

        return lastValueFrom(observable);
    }

    eliminar_catedratico(indice: number){
        let url = 'https://catedraticos-default-rtdb.firebaseio.com/datos/' + indice + '.json';
        this.httpClient.delete(url).subscribe(
            response =>console.log('Se ha eliminado el catedratico' + response),
            error => console.log('Error: ' + error)
        );
    }
}