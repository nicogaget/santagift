import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() logoutEvent = new EventEmitter<any>();
  @Input() isLoggedIn: boolean = false;
  @Input() showAdminBoard: boolean = false;
  @Input() showModeratorBoard: boolean = false;
  @Input() username?: string;
  constructor() {}

  logout() {
    this.logoutEvent.emit();
  }
  ngOnInit(): void {}
}
