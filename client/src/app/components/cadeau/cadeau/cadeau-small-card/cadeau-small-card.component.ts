import { Component, Input, OnInit } from '@angular/core';
import { Cadeau } from 'src/app/interfaces/cadeau.interface';

@Component({
  selector: 'app-cadeau-small-card',
  templateUrl: './cadeau-small-card.component.html',
  styleUrls: ['./cadeau-small-card.component.css'],
})
export class CadeauSmallCardComponent implements OnInit {
  @Input() cadeau!: Cadeau;
  constructor() {}

  ngOnInit(): void {}
}
