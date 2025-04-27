import { Component, inject, resource } from '@angular/core';
import { ProductSignalV3Service } from '../shared/product-signal-v3.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-product-v3',
  imports: [JsonPipe],
  templateUrl: './product-v3.component.html',
  styleUrl: './product-v3.component.css'
})
export class ProductV3Component {
  product3Service = inject(ProductSignalV3Service);
}
