import { Component, OnInit } from '@angular/core';
import { Auth } from '../..//services/auth0.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor( private auth : Auth ) { }

  ngOnInit() {
  }

}
