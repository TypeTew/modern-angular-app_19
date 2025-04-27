import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductResponse } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //ใช้สำหรับ rxjs เพื่อให้สามารถใช้ได้ในทุกๆที่

  private readonly http = inject(HttpClient);
  getProduct(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>('https://api.codingthailand.com/api/course');
  }

}
