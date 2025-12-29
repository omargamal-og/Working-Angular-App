import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  login(email: string, password: string): Observable<string> {
    const fakeToken = 'fake-jwt-token';
    localStorage.setItem('token', fakeToken);
    return of(fakeToken);
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
