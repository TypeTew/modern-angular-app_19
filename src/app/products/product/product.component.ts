import { Component, inject } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Product, ProductResponse } from '../shared/product.model';
import { JsonPipe } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  imports: [JsonPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  private readonly productsService = inject(ProductService);

  product: Product[] = [];
  isLoading = true;
  
  sub: Subscription | undefined;

  ngOnInit(): void {
    this.sub = this.productsService.getProduct().subscribe({
      next: (response: ProductResponse) => {
        this.product = response.data;
      },
      error: (err : any) => {
        console.error(err);
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }


  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }



}
