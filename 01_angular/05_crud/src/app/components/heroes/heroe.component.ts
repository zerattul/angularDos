import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interfaces';
import { HeroeService } from '../../services/heroe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe:Heroe = {
    nombre : "",
    bio : "",
    casa : "Marvel"
  }

  nuevo:boolean = false;
  id:string;

  constructor(
    private _heroeServices : HeroeService,
    private router : Router,
    private activateRouter : ActivatedRoute
  ) {
    this.activateRouter.params.subscribe( parametros => this.id = parametros['id']);
  }

  ngOnInit() {
  }

  guardar(){
    console.log(this.id);
    if( this.id == "nuevo" ){
      //insertar
      console.log("yo soy el nuevo");
      this._heroeServices.nuevoHeroe( this.heroe )
      .subscribe( data => {
        console.log("Soy la data de heroe.component ", data)
        this.router.navigate(['/heroe', data.name])
      }, error => console.error( error ));
    } else {
      // actulaizar
      console.log("yo soy el actualizr");
      this._heroeServices.actualizarHeroe( this.heroe, this.id )
      .subscribe( data => {
      }, error => console.error( error ));
    }
  }
}
