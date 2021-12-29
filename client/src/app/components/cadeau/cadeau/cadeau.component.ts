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
  cadeauList: Cadeau[] = [];
  vueCadeaux: boolean = true;
  vueList: boolean = false;
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
  pageChange(vue: string) {
    if (vue == 'cadeau') {
      this.vueCadeaux = true;
      this.vueList = false;
    }
    if (vue == 'list') {
      this.vueList = true;
      this.vueCadeaux = false;
    }
  }
  ajouterCadeau(cadeau: Cadeau) {
    this.cadeauList.push(cadeau);
    this.cadeaux.forEach((item, index) => {
      if (item === cadeau) this.cadeaux.splice(index, 1);
    });
  }
  retirerCadeau(cadeau: Cadeau) {
    this.cadeaux.push(cadeau);
    this.cadeauList.forEach((item, index) => {
      if (item === cadeau) this.cadeauList.splice(index, 1);
    });
  }
}
