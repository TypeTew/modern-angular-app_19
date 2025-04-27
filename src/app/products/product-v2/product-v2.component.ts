import { Component, inject } from '@angular/core';
import { ProductSignalV2Service } from '../shared/product-signal-v2.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-product-v2',
  imports: [JsonPipe],
  templateUrl: './product-v2.component.html',
  styleUrl: './product-v2.component.css'
})
export class ProductV2Component {

  product2Service  = inject(ProductSignalV2Service);


}
