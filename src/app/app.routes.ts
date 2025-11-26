import { Component, NgModule } from "@angular/core"
import { CatedraticosComponent } from "./catedraticos-component/catedraticos-component"
import { Router, RouterModule, Routes } from "@angular/router";
import { InicioComponent } from "./inicio-component/inicio-component";
import { ListaContacto } from "./catedraticos3-component/catedraticos3-component";
import { Login } from "./login/login";
import { LoginGuardian } from "./login/login-guardian";
import { Registro } from "./registro/registro";
import { CatedraticosComponent as Catedratico2Component } from "./catedratico2-component/catedratico2-component";
import { MateriasComponent } from "./catedraticos4-component/catedraticos4-component";
import { Catedraticos5Component } from "./catedraticos5-component/catedraticos5-component";

export const routes: Routes = [
    { path: "", component: Login },
    { path: "inicio", component: InicioComponent, canActivate: [LoginGuardian] },
    { path: "catedraticos", component: CatedraticosComponent },
    { path: "catedratico2", component: Catedratico2Component },
    { path: "catedraticos3", component: ListaContacto },
    { path : "catedraticos4", component: MateriasComponent },
    { path : "catedraticos5", component: Catedraticos5Component },
    { path: "login", component: Login },
    { path: "registro", component: Registro },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule {}
