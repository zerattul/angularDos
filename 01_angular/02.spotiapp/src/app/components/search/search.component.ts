import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  termino:string = '';
  constructor( private _spotifyService: SpotifyService,
               private activatedRoute : ActivatedRoute ) {

  }

  ngOnInit() {
    // el nombre de parametro que va dentro del arreglo debe ser el mismo que uso en la ruta como parametro
    this.activatedRoute.params.map( parametro => parametro['id'] ).subscribe( id => {
    
    })
  }

  buscarArtistas(){
      this._spotifyService.getArtistas( this.termino ).subscribe();
  }

}
