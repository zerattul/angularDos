import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './components/login/login.component';
import { EmailComponent } from './components/email/email.component';
import { MebersComponent } from './components/mebers/mebers.component';
import { SignupComponent } from './components/signup/signup.component';

const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'email', component: EmailComponent },
  { path: 'mebers', component: MebersComponent },
  { path: 'login-email', component: EmailComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
