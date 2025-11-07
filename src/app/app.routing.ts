//NECESITAMOS UNA SERIE DE MODULOS QUE SE ENCUENTRAN DENTRO DE ANGULAR ROUTER
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { Listaproductos } from "./components/listaproductos/listaproductos";
import { Hijocoche } from "./components/hijocoche/hijocoche";
import { PadreDeportes } from "./components/padre-deportes/padre-deportes";
import { Padrecoches } from "./components/padrecoches/padrecoches";
import { LibreriaComponent } from "./components/libreria-component/libreria-component";
//NECESITAMOS UN ARRAY DE RUTAS y sera de tipo Routes
const appRoutes: Routes = [
    {path: '', component: Listaproductos},
    {path: 'coches', component: Padrecoches},
    {path: 'deportes', component: PadreDeportes},
    {path: 'comics', component: LibreriaComponent},
];

//DESDE ESTA CLASE DEBEMOS EXPORTAR NUESTRO ARRAY DE RUTAS
export const appRoutingProvider: any [] = [];
//LAS PROPIAS RUTAS A EXPORTAR
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
