import { Component } from '@angular/core';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-footer',
  imports: [UserProfileComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  profile = {id: 1, name: 'Bob'};


  handleUserProfile(hello: string) {
    // console.log('User profile clicked!');
    alert('User profile clicked! , ' + hello);
    return hello;
  }

}
