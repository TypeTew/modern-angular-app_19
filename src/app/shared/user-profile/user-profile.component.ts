import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  profile = input<string>("John");
  
}
