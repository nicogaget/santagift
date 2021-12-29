import { Component, Input, OnInit } from '@angular/core';
import { Cadeau } from 'src/app/interfaces/cadeau.interface';

@Component({
  selector: 'app-cadeau-list',
  templateUrl: './cadeau-list.component.html',
  styleUrls: ['./cadeau-list.component.css'],
})
export class CadeauListComponent implements OnInit {
  @Input() cadeauList: Cadeau[] = [];
  constructor() {}

  ngOnInit(): void {}
}
