import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);


  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]], //ng@gmail.com //123456
    password: ['', [Validators.required]]
  });

  login() {
    this.authService.login(this.loginForm.get('email')?.value!, this.loginForm.get('password')?.value!).subscribe({
      next: (response: any) => {
        localStorage.setItem('token', JSON.stringify(response));
        this.router.navigate(['/dashboard']);
      },
      error: (err: any) => {
        console.log(err);
        alert(err.error.message); // message คือจาก api
      },
      complete: () => {
        console.log('login complete');
      }
     });
  }



}
