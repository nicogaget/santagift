import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Cadeau } from 'src/app/interfaces/cadeau.interface';
import { CadeauService } from 'src/app/_services/cadeau.service';

@Component({
  selector: 'app-cadeau-form',
  templateUrl: './cadeau-form.component.html',
  styleUrls: ['./cadeau-form.component.css'],
})
export class CadeauFormComponent implements OnInit {
  cadeau!: Cadeau;
  form: FormGroup;
  //@Output() nouveauCadeauEvent = new EventEmitter<Cadeau>();

  constructor(private fb: FormBuilder, private cadeauService: CadeauService) {
    this.form = this.fb.group({
      img: [''],
      titre: [''],
      description: [''],
    });
  }
  onSubmit() {
    this.cadeau = this.form.value;
    this.cadeauService.create(this.cadeau).subscribe((response) => {
      console.log(response);
    });
  }

  ngOnInit(): void {}
}
