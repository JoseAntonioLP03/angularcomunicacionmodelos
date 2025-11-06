import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-deporte',
  standalone: false,
  templateUrl: './hijo-deporte.html',
  styleUrl: './hijo-deporte.css',
})
export class HijoDeporte {
  @Input() sport! :string;
  @Output() seleccionarFavoritoPadre: EventEmitter<any>= new EventEmitter();

  seleccionarFavoritoHijo():void{
    this.seleccionarFavoritoPadre.emit(this.sport);
  }
}
