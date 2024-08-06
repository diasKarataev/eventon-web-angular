import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {
  form = new FormGroup(
    {
      email: new FormControl(null),
      password: new FormControl(null)
    }
  )

  authService = inject(AuthService)

  onSubmit() {
    const registerRequest = {
      email: this.form.value.email?? '',
      password: this.form.value.password?? ' '}
    this.authService.register(registerRequest).subscribe()
  }
}
