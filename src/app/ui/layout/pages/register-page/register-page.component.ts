import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../data/service/auth/auth.service';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.less',
})
export class RegisterPageComponent {
  router = inject(Router);

  form = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null),
  });

  authService = inject(AuthService);

  onSubmit() {
    const registerRequest = {
      email: this.form.value.email ?? '',
      password: this.form.value.password ?? '',
    };

    this.authService.register(registerRequest).subscribe();

    this.router.navigate(['/login']);
  }
}
