import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HomeDashboardComponent } from "./home-dashboard/home-dashboard.component";
import { AboutDashboardComponent } from "./about-dashboard/about-dashboard.component";

export const dashboardRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent, // <router-outlet />
        children: [
            { path: '', component: HomeDashboardComponent },
            { path: 'about', component: AboutDashboardComponent},
        ]
    }
];

