import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProvider } from './app.routing';
//
import { App } from './app';
import { Listaproductos } from './components/listaproductos/listaproductos';
import { Menulistaproductos } from './components/menulistaproductos/menulistaproductos';
import { Hijocoche } from './components/hijocoche/hijocoche';
import { Padrecoches } from './components/padrecoches/padrecoches';
import { PadreDeportes } from './components/padre-deportes/padre-deportes';
import { HijoDeporte } from './components/hijo-deporte/hijo-deporte';
import { LibreriaComponent } from './components/libreria-component/libreria-component';
import { ComicComponent } from './components/comic-component/comic-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { ServiceComics } from './services/service.comics';
//

@NgModule({
  declarations: [
    App,
    Listaproductos,
    Menulistaproductos,
    Hijocoche,
    Padrecoches,
    PadreDeportes,
    HijoDeporte,
    LibreriaComponent,
    ComicComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    appRoutingProvider,
    ServiceComics,
  ],
  bootstrap: [App]
})
export class AppModule { }
