import { Component, OnInit, signal } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar-component/navbar-component';
import { LoginService } from './login/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
 ngOnInit(): void {
   firebase.initializeApp({
    apiKey: "AIzaSyDY8QNNx3lRK7Hp_xgWTtM_Z2G0_F-nGPg",
    authDomain: "catedraticos.firebaseapp.com",
   });
 }

 constructor( private loginService: LoginService) { }

 estaLogueado(){
    return this.loginService.estaLogueado();
 }
 logout(){
    this.loginService.logout();
  }
}
