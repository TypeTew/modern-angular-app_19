import { Component, effect, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  private readonly route = inject(ActivatedRoute);
  id = signal<number | undefined>(undefined);

  constructor() {
    effect(() => {
      const id = this.route.snapshot.params['id']; // Get the id from the route
      this.id.set(id);
    });
  }

}
