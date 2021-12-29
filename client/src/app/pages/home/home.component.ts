import { Component, OnInit } from '@angular/core';
import { Cadeau } from 'src/app/interfaces/cadeau.interface';
import { CadeauService } from 'src/app/_services/cadeau.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  content?: string;

  constructor(
    private userService: UserService,
    private cadeauService: CadeauService
  ) {}

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe(
      (data) => {
        this.content = data;
      },
      (err) => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
