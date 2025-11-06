import { Component } from '@angular/core';
import { Coche } from '../../models/coche';

@Component({
  selector: 'app-padrecoches',
  standalone: false,
  templateUrl: './padrecoches.html',
  styleUrl: './padrecoches.css',
})
export class Padrecoches {
  public cochesArray:Array<Coche>;
  constructor(){
    this.cochesArray = [
      new Coche('Ferrari', 'LaFerrari', 350, 26, true),
      new Coche('Bugatti', 'Chiron', 420, 24, false),
      new Coche('McLaren', 'P1', 350, 28, false),
      new Coche('Lamborghini', 'Aventador SVJ', 350, 29, false),
      new Coche('Porsche', '911 GT2 RS', 340, 27, false),
    ];
  }
}
