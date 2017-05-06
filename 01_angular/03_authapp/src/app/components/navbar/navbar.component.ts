import { Component, OnInit } from '@angular/core';
import { Auth } from '../..//servcies/auth0.service'

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
