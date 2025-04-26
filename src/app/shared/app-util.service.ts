import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppUtilService {
  private readonly http = inject(HttpClient);

  getAPIVersion(): Observable<any> {
    return this.http.get<any>('https://api.codingthailand.com/api/version');
  }

}
