import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

//rutas
import { APP_ROUTING } from './app.routes';

export const FIREBASECONFIG = {
  apiKey: "AIzaSyBdfEzyjyYGE6c4Od0QTwuO6igKjmTuce8",
  authDomain: "socialogin-83039.firebaseapp.com",
  databaseURL: "https://socialogin-83039.firebaseio.com",
  projectId: "socialogin-83039",
  storageBucket: "socialogin-83039.appspot.com",
  messagingSenderId: "1091440419249"
};


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { EmailComponent } from './components/email/email.component';
import { SignupComponent } from './components/signup/signup.component';
import { MebersComponent } from './components/mebers/mebers.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MebersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(FIREBASECONFIG),
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
