import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { ProductResponse } from './product.model';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class ProductSignalV2Service {

  private readonly http = inject(HttpClient);
  errorMessage = signal<string | null>(null);

  private getProduct(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>('https://api.codingthailand.com/api/course').pipe(
      catchError((err) => {
        console.log(err);
        this.errorMessage.set(err.error.message); // message from api (backend)
        return EMPTY;
      })
    );
  }

  productResponse = toSignal<ProductResponse | null>(this.getProduct(), {
    initialValue: null
  });

}
