import { Component, Input, OnInit } from '@angular/core';
import { Cadeau } from 'src/app/interfaces/cadeau.interface';
import { CadeauService } from 'src/app/_services/cadeau.service';

@Component({
  selector: 'app-cadeau',
  templateUrl: './cadeau.component.html',
  styleUrls: ['./cadeau.component.css'],
})
export class CadeauComponent implements OnInit {
  cadeaux!: Cadeau[];
  constructor(private cadeauService: CadeauService) {}

  ngOnInit(): void {
    this.cadeauService.getAll().subscribe(
      (response) => {
        this.cadeaux = response;
      },
      (err) => {
        this.cadeaux = JSON.parse(err.error).message;
      }
    );
  }
}
