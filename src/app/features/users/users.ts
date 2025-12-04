import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, User } from '../../core/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="container">
      <h2>Usuarios</h2>

      <ul *ngIf="users$ | async as users; else loading">
        <li *ngFor="let u of users">{{ u.id }} — {{ u.name }} ({{ u.email }})</li>
      </ul>

      <ng-template #loading>Cargando...</ng-template>
    </section>
  `,
})
export class UsersComponent {
  private api = inject(ApiService);
  users$: Observable<User[]> = this.api.getUsers();
}
