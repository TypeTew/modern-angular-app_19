import { Component, input } from '@angular/core';
import { UserProfileInput } from './user-profile.types';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
  
})
export class UserProfileComponent {
  //profile = input<string>("");
  profile = input.required<UserProfileInput>();
}
