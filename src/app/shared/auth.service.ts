import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  loginUrl = 'https://api.codingthailand.com/api/login';
  profileUrl = 'https://api.codingthailand.com/api/profile';

  userProfile$ = new BehaviorSubject<any>(null); // global var

  initProfile(): void {
    const token = JSON.parse(localStorage.getItem('token')!);
    const myHeader = { 'Authorization': 'Bearer ' + token.access_token };
    this.http.get<any>(this.profileUrl, {
      headers: myHeader
    }).subscribe({
      next: (response: any) => {
          console.log(response.data.user);
          this.userProfile$.next(response.data.user);//  จะมา set เก็บเป็น global
         // { id:1, name: ...}
      }
    });
  }

  getProfile(): Observable<any> {
    return this.userProfile$;
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.loginUrl, {
      email: email,
      password: password
    });
  }

  logout(): void   {
    localStorage.removeItem('token');
  }

  isLogin(): boolean {
    const token = JSON.parse(localStorage.getItem('token')!);
    if (token) {
      return true;
    } else {
      return false;
    }
  }
}