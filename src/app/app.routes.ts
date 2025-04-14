import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { productRoutes } from './products/product.routes';
import { dashboardRoutes } from './dashboards/dashboard.routes';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'หน้าหลัก' },
    { path: 'about', component: AboutComponent, title: 'เกี่ยวกับเรา' },
    { 
        path: 'contact', 
        loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent),
        title: 'ติดต่อเรา'
    },
    ...productRoutes,
    {
        // Lazy loading the dashboard module
        // The module will be loaded when the user navigates to /dashboard
        // แยก การโหลดโมดูล dashboard ออกไปเป็นโมดูลย่อย
        // โดยจะโหลดโมดูลนี้เมื่อผู้ใช้ไปที่ /dashboard
        path: 'dashboard',
        loadChildren: () => import('./dashboards/dashboard.routes').then(m => m.dashboardRoutes), // Load the dashboard module
    },
    {path: '**', component: NotFoundComponent}
];
