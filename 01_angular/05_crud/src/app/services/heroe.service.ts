import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe.interfaces';
import 'rxjs/Rx';

@Injectable()
export class HeroeService {

  heroesURL:string = "https://crudheroes.firebaseio.com/heroes.json";
  heroeURL:string = "https://crudheroes.firebaseio.com/heroes";

  constructor( private http : Http ) { }

  nuevoHeroe( heroe:Heroe ){
    let body = JSON.stringify( heroe );
    let headers = new Headers({
      'Content-Type' : 'application/json'
    })

    return this.http.post( this.heroesURL, body, { headers })
      .map( res => {
        console.log( res.json() );
        return res.json();
      })
  }

  actualizarHeroe( heroe:Heroe, key:string ){
    let body = JSON.stringify( heroe );
    let headers = new Headers({
      'Content-Type' : 'application/json'
    })

    let url = `${ this.heroeURL }/${ key }.json`;

    return this.http.put( url, body, { headers })
      .map( res => {
        console.log( res.json() );
        return res.json();
      })
  }

}
