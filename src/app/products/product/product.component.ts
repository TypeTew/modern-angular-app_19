import { Component, inject } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Product, ProductResponse } from '../shared/product.model';
import { JsonPipe } from '@angular/common';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { MatHeaderComponent } from "../../shared/mat-header/mat-header.component";

@Component({
  selector: 'app-product',
  imports: [JsonPipe, MatHeaderComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  private readonly productService = inject(ProductService);

  product: Product[] = [];
  isLoading = true;
  
  sub: Subscription | undefined;
  errorMessage!: string ;

  ngOnInit(): void {
    this.sub = this.productService.getProduct().subscribe({
      next: (response: ProductResponse) => {
        this.product = response.data;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        this.errorMessage = err.error.message; // message คือจาก api
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
