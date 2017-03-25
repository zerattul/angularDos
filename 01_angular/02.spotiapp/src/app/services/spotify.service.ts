import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; // El modulo http es necesario para hacer consultas put, get post, delete
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[] = [];
  urlBusqueda:string = 'https://api.spotify.com/v1/search?';

  constructor( private http: Http ) { }

  getArtistas( termino: string){
    let query = `q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get( url ).map( res => {
      this.artistas = res.json().artists.items; // Esto me permite utilizar los datos en el servicio
      console.log( res.json().artists.items );

      // return this.artistas; // Esto envia los datos al componente
    });
  }


}
