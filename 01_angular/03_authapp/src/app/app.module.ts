import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// routes
import { APP_ROUTING } from './app.routes';

// servicios
import { Auth } from './services/auth0.service';
import { AuthguardService } from './services/authguard.service';

// otros
//import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PreciosComponent,
    ProtegidaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    Auth,
    AuthguardService
    //AUTH_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
