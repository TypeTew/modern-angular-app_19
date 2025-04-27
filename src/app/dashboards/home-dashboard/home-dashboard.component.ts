import { Component, inject } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home-dashboard',
  imports: [AsyncPipe],
  templateUrl: './home-dashboard.component.html',
  styleUrl: './home-dashboard.component.css'
})
export class HomeDashboardComponent {
  authService = inject(AuthService);
  profile$!: Observable<any>;
  router = inject(Router);

  constructor() {
    this.profile$ = this.authService.getProfile();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
