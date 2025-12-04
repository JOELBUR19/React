import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
export interface User {
  id: number;
  name: string;
  email: string;
}
@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiUrl;

  getUsers() {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }
}
