import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { environment } from '../../environments/environment';
export interface User {
  id: number;
  name: string;
  email: string;
}
@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:3401/api'; // p. ej.
  getUsers() {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }
}
