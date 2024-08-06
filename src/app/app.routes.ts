import { Routes } from '@angular/router';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {EventsComponent} from "./pages/events/events.component";
import {LayoutComponent} from "./component/layout/layout.component";

export const routes: Routes = [
  {path: '', component: LayoutComponent, children: [
    {path: '', component: EventsComponent}
    ]
  },
  {path: 'login', component: LoginPageComponent}
];
