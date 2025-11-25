import { Component, NgModule } from "@angular/core"
import { CatedraticosComponent } from "./catedraticos-component/catedraticos-component"
import { Router, RouterModule, Routes } from "@angular/router";
import { InicioComponent } from "./inicio-component/inicio-component";
import { MateriasComponent } from "./materias-component/materias-component";
import { ContactoComponent } from "./contacto-component/contacto-component";
import { ListaContacto } from "./lista-contacto/lista-contacto";
import { Login } from "./login/login";
import { LoginGuardian } from "./login/login-guardian";
import { Registro } from "./registro/registro";

export const routes:Routes = [
    {path: "", component: Login},
    {path: 'inicio', component: InicioComponent, canActivate: [LoginGuardian]},
    {path: 'catedraticos', component: CatedraticosComponent},
    {path: 'materias', component: MateriasComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'lista-contacto', component: ListaContacto},
    {path: 'login', component: Login},
    {path: 'registro', component: Registro},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule {} 