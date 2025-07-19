// import { Component, inject, signal } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   private http = inject(HttpClient);
//   private router = inject(Router);

//   isLoading = signal(false);
//   loginError = signal<string | null>(null);
//   showPassword = signal(false);

//   loginForm = new FormGroup({
//     userName: new FormControl('', [Validators.required, Validators.email]),
//     password: new FormControl('', [Validators.required, Validators.minLength(6)])
//   });

//   onSubmit() {
//     this.loginError.set(null);

//     if (this.loginForm.invalid) {
//       this.loginForm.markAllAsTouched();
//       return;
//     }

//     this.isLoading.set(true);
//     this.router.navigate(['/dashboard']);
//   }
//   togglePasswordVisibility() {
//     this.showPassword.update(value => !value);
//   }
// }
import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private http = inject(HttpClient);
  private router = inject(Router);

  isLoading = signal(false);
  loginError = signal<string | null>(null);
  showPassword = signal(false);

  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    rememberMe: new FormControl(false),
    captcha: new FormControl('')
  });

  get userName() { return this.loginForm.get('userName')!; }
  get password() { return this.loginForm.get('password')!; }
  get captcha() { return this.loginForm.get('captcha')!; }

  onSubmit() {
    this.loginError.set(null);

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);

    setTimeout(() => {

      this.isLoading.set(false);
      this.router.navigate(['/dashboard']);
    }, 1500);
  }

  togglePasswordVisibility() {
    this.showPassword.update(v => !v);
  }

  reloadCaptcha() {

    console.log('Reload CAPTCHA');
  }
}

