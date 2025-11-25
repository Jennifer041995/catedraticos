import { Component, NgModule } from "@angular/core"
import { CatedraticosComponent } from "./catedraticos-component/catedraticos-component"
import { Router, RouterModule, Routes } from "@angular/router";
import { InicioComponent } from "./inicio-component/inicio-component";
import { MateriasComponent } from "./materias-component/materias-component";
import { ContactoComponent } from "./contacto-component/contacto-component";
import { Login } from "./login/login";
import { LoginGuardian } from "./login/login-guardian";

export const routes:Routes = [
    {path: "", component: Login},
    {path: 'inicio', component: InicioComponent, canActivate: [LoginGuardian]},
    {path: 'catedraticos', component: CatedraticosComponent},
    {path: 'materias', component: MateriasComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'login', component: Login},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule {} 