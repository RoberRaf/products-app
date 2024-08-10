import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  handleSubmit(form: NgForm) {
    if (form.invalid) {
      console.log('Form Invalid');
      Object.values(form.controls).forEach((condtroller) => {
        condtroller.markAsTouched();
      });
    } else {
      console.log('Form Valid');
    }
  }
}
