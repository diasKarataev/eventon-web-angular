import { Routes } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';
import { RegisterPageComponent } from './ui/layout/pages/register-page/register-page.component';
import { LoginPageComponent } from './ui/layout/pages/login-page/login-page.component';
import { EventsPageComponent } from './ui/layout/pages/events-page/events-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: '', component: EventsPageComponent }],
  },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
];
