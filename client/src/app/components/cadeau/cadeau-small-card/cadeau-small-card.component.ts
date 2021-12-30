import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cadeau } from 'src/app/interfaces/cadeau.interface';

@Component({
  selector: 'app-cadeau-small-card',
  templateUrl: './cadeau-small-card.component.html',
  styleUrls: ['./cadeau-small-card.component.css'],
})
export class CadeauSmallCardComponent implements OnInit {
  @Input() cadeau!: Cadeau;
  @Output() retirerCadeauEvent = new EventEmitter<Cadeau>();
  constructor() {}

  retirerCadeau() {
    this.retirerCadeauEvent.emit(this.cadeau);
  }
  ngOnInit(): void {}
}
