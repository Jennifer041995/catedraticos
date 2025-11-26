
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom, Observable } from "rxjs";
import { Router } from "@angular/router";
import { LoginService } from "./login/login.service";
import { CatedraticosComponent } from "./catedraticos-component/catedraticos-component";
import { DocenteResponse } from "./models/docente-mode";

@Injectable({
    providedIn: 'root'
})

export class DataServices{
    private url: string = "https://catedraticos-default-rtdb.firebaseio.com";
    private json_fb = "lista-docs.json";
    constructor(private httpClient: HttpClient, private router: Router, private loginService: LoginService){

    }

    guardar_catedratico(catedraticos: CatedraticosComponent[]){
        this.httpClient.put(this.url + '/datos.json', catedraticos).subscribe(
            response=>console.log("Se han guardado los catedraticos"),
            error=>console.log('Error ' + error)
        )
    }

    guardar_catedraticos(catedraticos: any[]){
        this.httpClient.put(this.url + '/datos.json', catedraticos).subscribe(
            response=>console.log("Se han guardado los catedraticos"),
            error=>console.log('Error ' + error)
        )
    }

    /*cargar_catedratico(){
        const token = this.loginService.getIdToken();
        return this.httpClient.get(this.url + '/contactos.json?auth=' + token);
    }*/

    crear_catedratico(contacto: any): Promise<any>{
        const token = this.loginService.getIdToken();
        const observable = this.httpClient.post(this.url + '/contactos.json?auth=' + token, contacto);
        return lastValueFrom(observable);
    }

    get_catedratico(id: string){
        const token = this.loginService.getIdToken();
        return this.httpClient.get(this.url + '/contactos/' + id + '.json?auth=' + token);
    }

    actualizar(id: string, contacto: any): Promise<any>{
        let url = this.url + '/contactos/' + id + '.json';
        const observable = this.httpClient.put(url, contacto);

        return lastValueFrom(observable);
    }

    eliminar(id: string){
        let url_delete = this.url + '/contactos/' + id + '.json';
        this.httpClient.delete(url_delete).subscribe(
            response =>console.log('Se ha eliminado el contacto' + response),
            error => console.log('Error: ' + error)
        );
    }

    cargar_catedraticos(): Observable<DocenteResponse>{
        const token = this.loginService.getIdToken();
        return this.httpClient.get<DocenteResponse>(this.url + '/' + this.json_fb + '?auth=' + token);
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