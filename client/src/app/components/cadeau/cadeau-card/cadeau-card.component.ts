import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cadeau } from 'src/app/interfaces/cadeau.interface';

@Component({
  selector: 'app-cadeau-card',
  templateUrl: './cadeau-card.component.html',
  styleUrls: ['./cadeau-card.component.css'],
})
export class CadeauCardComponent implements OnInit {
  @Input() cadeau!: Cadeau;
  @Output() ajoutCadeauEvent= new EventEmitter<Cadeau>(); 
  constructor() {}

  ajouterCadeau(){
    this.ajoutCadeauEvent.emit(this.cadeau);

  }
  ngOnInit(): void {}
}
