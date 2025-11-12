import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';




@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  errorMessage = '';

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  loginWith(provider: string): void {
    console.log(`Login com ${provider}`);
    // Aqui você pode integrar com Firebase, OAuth, etc.
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    const { email, senha } = this.loginForm.value;
    console.log(`Autenticando com: ${email} / ${senha}`);

    // Simulação de autenticação
    if (email === 'admin@exemplo.com' && senha === '123456') {
      alert('Login realizado com sucesso!');
    } else {
      this.errorMessage = 'E-mail ou senha inválidos.';
    }
  }
}