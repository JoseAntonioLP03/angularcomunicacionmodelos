import { Component , Input } from '@angular/core';
import { Coche } from '../../models/coche';

@Component({
  selector: 'app-hijocoche',
  standalone: false,
  templateUrl: './hijocoche.html',
  styleUrl: './hijocoche.css',
})
export class Hijocoche {
  @Input() car! : Coche;
  // Expose JS Math to the template (Angular templates cannot access global Math directly)
  public Math = Math;
  public mensaje: string;

  constructor(){
    this.mensaje = "";
  }

  comprobarEstado():boolean{
    if(this.car.estado == false){
      this.mensaje= "El coche esta apagado";
      this.car.velocidad = 0;
      return false;
    }else{
      this.mensaje = "Arrancando!!!"
      return true;
    }
  }

  encenderCoche():void{
    this.car.estado = !this.car.estado;
    this.comprobarEstado();
  }
  
  acelerarCoche():void{
    if(this.comprobarEstado() ==false){
      alert("¿Donde vas? Que estoy APAGADO!!")
    }else{
      this.car.velocidad += this.car.aceleracion
    }
  }
}
