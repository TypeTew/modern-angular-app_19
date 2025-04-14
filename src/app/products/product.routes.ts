import { Routes } from "@angular/router";
import { ProductComponent } from "./product/product.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

export const productRoutes: Routes = [
    {
        path: 'product',
        component: ProductComponent
    },
    {
        path: 'product/:id',
        component: ProductDetailComponent
    }
]
