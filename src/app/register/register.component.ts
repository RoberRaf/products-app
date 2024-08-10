import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { passwordMatch, strongPassword } from './passvalidator';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  form: FormGroup;

  passwordPattern: string = 'aaaa';
  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }
  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        strongPassword,
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        strongPassword,
        passwordMatch(() => this.password?.value),

        // Validators.pattern(this.passwordPattern),
      ]),
    });
  }

  handleRegister() {
  if (this.form.invalid) {
      console.log('Form Invalid');
      Object.values(this.form.controls).forEach((condtroller) => {
        condtroller.markAsTouched();
      });
    } else {
      console.log('Form Valid');
    }
  }
}
