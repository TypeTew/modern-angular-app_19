import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { productRoutes } from './products/product.routes';
import { LoginComponent } from './login/login.component';
import { authGuard } from './shared/auth.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'หน้าหลัก' },
    { path: 'about', component: AboutComponent, title: 'เกี่ยวกับเรา' },
    { path: 'login', component: LoginComponent, title: 'Log In' },
    { 
        path: 'contact', 
        loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent),
        title: 'ติดต่อเรา'
    },
    ...productRoutes,
    {
        // การโหลดโมดูลแบบ Lazy Loading
        // แยก การโหลดโมดูล dashboard ออกไปเป็นโมดูลย่อย
        // โดยจะโหลดโมดูลนี้เมื่อผู้ใช้ไปที่ /dashboard
        path: 'dashboard',
        loadChildren: () => import('./dashboards/dashboard.routes').then(m => m.dashboardRoutes), // Load the dashboard module
        canMatch: [authGuard]
    },
    {path: '**', component: NotFoundComponent}
];
