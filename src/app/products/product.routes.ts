import { Routes } from "@angular/router";
import { ProductComponent } from "./product/product.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductV2Component } from "./product-v2/product-v2.component";
import { ProductV3Component } from "./product-v3/product-v3.component";

export const productRoutes: Routes = [
    {
        path: 'product',
        component: ProductComponent
    },
    
    {
        path: 'product/:id',
        component: ProductDetailComponent
    },
    {
        path: 'product2',
        component: ProductV2Component
    },
    {
        path: 'product3',
        component: ProductV3Component
    },

]
