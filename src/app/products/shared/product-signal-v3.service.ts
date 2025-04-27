import { Injectable, resource } from '@angular/core';
import { ProductResponse } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductSignalV3Service {

  private async getProduct(abortSignal: AbortSignal) {
    const res = await fetch('https://api.codingthailand.com/api/course', {signal: abortSignal});
    if (!res.ok) {
       const err = await res.json() as any;
       throw new Error(err.message); // message มาจาก api (backend)
    }
    return await res.json() as ProductResponse;
}

productResponse = resource({
  loader: async ({ abortSignal }) => {
      return await this.getProduct(abortSignal);
  }
})

}
