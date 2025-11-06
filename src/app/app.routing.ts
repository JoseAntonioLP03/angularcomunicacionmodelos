//NECESITAMOS UNA SERIE DE MODULOS QUE SE ENCUENTRAN DENTRO DE ANGULAR ROUTER
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { Listaproductos } from "./components/listaproductos/listaproductos";
import { Hijocoche } from "./components/hijocoche/hijocoche";
//NECESITAMOS UN ARRAY DE RUTAS y sera de tipo Routes
const appRoutes: Routes = [
    {path: '', component: Listaproductos},
];

//DESDE ESTA CLASE DEBEMOS EXPORTAR NUESTRO ARRAY DE RUTAS
export const appRoutingProvider: any [] = [];
//LAS PROPIAS RUTAS A EXPORTAR
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
