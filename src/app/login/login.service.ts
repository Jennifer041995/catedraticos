import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class LoginService {
    constructor(private router: Router){}
    token: string = '';

    login(email:string, password:string){
        return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => {
                return firebase.auth().currentUser?.getIdToken()
                .then(
                    token => {
                        this.token = token;
                        localStorage.setItem('token', token);
                        this.router.navigate(['inicio']);
                        return Promise.resolve();
                    },
                    error => {
                        console.log("Error al obtener el token" + error);
                        return Promise.reject(error);
                    }
                )
            }
        )
        .catch(error => {
            return Promise.reject(error);
        });
    }

    getIdToken(){
        return localStorage.getItem('token') || '';
    }

    estaLogueado(){
        return !!localStorage.getItem('token');
    }

    logout(){
        firebase.auth().signOut()
        .then(
            () => {
                this.token = '';
                localStorage.removeItem('token');
                this.router.navigate(['login']);
            }
        )
    }
}