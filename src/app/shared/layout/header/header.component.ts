import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  visibleNavbar: boolean = false

  constructor() {}

  toggleVisibility() {
    this.visibleNavbar = !this.visibleNavbar;
  }

  ngOnInit(): void {}
}
