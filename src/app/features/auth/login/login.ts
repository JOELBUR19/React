import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="container">
      <h2>Iniciar sesión</h2>
      <form [formGroup]="form" (ngSubmit)="submit()">
        <label>Email <input type="email" formControlName="email" /></label>
        <div *ngIf="form.get('email')?.invalid && form.get('email')?.touched">Email inválido</div>
        <label>Contraseña <input type="password" formControlName="password" /></label>
        <div *ngIf="form.get('password')?.invalid && form.get('password')?.touched">
          Requerida (min 6)
        </div>
        <button [disabled]="form.invalid">Entrar</button>
      </form>
    </section>
  `,
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  submit() {
    if (this.form.valid) {
      // Llama a tu servicio Auth
      console.log('Login', this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
