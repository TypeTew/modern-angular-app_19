import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'หน้าหลัก' },
    { path: 'about', component: AboutComponent, title: 'เกี่ยวกับเรา' },
    { 
        path: 'contact', 
        loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent),
        title: 'ติดต่อเรา'
    },
    {path: '**', component: NotFoundComponent}
];
