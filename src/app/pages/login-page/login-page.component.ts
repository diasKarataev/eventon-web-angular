import {Component, inject} from '@angular/core';
import {EventsComponent} from "../events/events.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    EventsComponent,
    ReactiveFormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  authService = inject(AuthService);
  form = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null)
    }
  )


  onSubmit(){
    const loginData = {
      email: this.form.value.email ?? '',
      password: this.form.value.password ?? ''
    };
    this.authService.login(loginData).subscribe(
      value => localStorage.setItem('token', value.accessToken)
    )
  }
}
