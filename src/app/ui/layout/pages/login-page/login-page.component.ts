import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../data/service/auth/auth.service';
import { EventsPageComponent } from '../events-page/events-page.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [EventsPageComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.less',
})
export class LoginPageComponent {
  router = inject(Router);

  form = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null),
  });

  authService = inject(AuthService);

  onSubmit() {
    const loginData = {
      email: this.form.value.email ?? '',
      password: this.form.value.password ?? '',
    };

    this.authService
      .login(loginData)
      .subscribe((value) => localStorage.setItem('token', value.accessToken));

    this.router.navigate(['/']);
  }
}
