import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn } from '../../app.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
  animations : [moveIn()],
  host: {'[@momeIn]': ''}
})
export class LoginComponent implements OnInit {

  error : any;
  constructor(
    public af: AngularFireModule,
    private router: Router
  ) {
  //   this.af.auth.subcribe( auth => {
  //     if(auth) {
  //       this.router.navigateByUrl('/mebers');
  //     }
  //   })
  // }
  //
  // loginFb() {
  //   this.af.auth.login({
  //     provider : AuthProviders.Facebook,
  //     method: AuthMethods.Popup,
  //   }).then(
  //     (success) => {
  //       this.router.navigate(['/mebers']);
  //     }).catch(
  //       (err) => {
  //         this.error = err;
  //       }
  //     )
  }

  ngOnInit() {
  }

}
