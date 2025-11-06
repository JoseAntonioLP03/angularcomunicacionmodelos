import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-deportes',
  standalone: false,
  templateUrl: './padre-deportes.html',
  styleUrl: './padre-deportes.css',
})
export class PadreDeportes {
  public deportes:Array<string>;
  public mensaje: string;

  seleccionarFavoritoPadre(event:any):void{
    this.mensaje = "Deporte favorito: "+event
    console.log("Comunicacion al padre!!!" + event)
  }

  constructor(){
    this.mensaje="";
    this.deportes=["Futbol","Basket","Beisbol","Tenis","Natación"];
  }

}
