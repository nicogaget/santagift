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
  cadeauList: Cadeau[] = [
    {
      id: 1,
      title: 'Gta the trilogy the definitive edition XBOX SERIES X',
      description: 'null',
      img: 'https://www.micromania.fr/dw/image/v2/BCRB_PRD/on/demandware.static/-/Sites-masterCatalog_Micromania/default/dwf2935860/images/high-res/117506.jpg?sw=224&sh=216&sm=fit',
    },
  ];
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

  retirerCadeauList(cadeau: Cadeau) {
    console.log('retirer cadeau' + JSON.stringify(cadeau));
    this.cadeaux.push(cadeau);
    this.cadeauList.forEach((item, index) => {
      if (item === cadeau) this.cadeauList.splice(index, 1);
    });
  }
}
