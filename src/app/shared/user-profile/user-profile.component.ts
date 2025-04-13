import { Component, input, output } from '@angular/core';
import { UserProfileInput } from './user-profile.types';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
  
})
export class UserProfileComponent {
  //profile = input<string>("");
  profile = input.required<UserProfileInput>();

  // onUserProfile = output<void>();
  onUserProfile = output<string>(); //สร้างอีเวนต์ที่ชื่อว่า onUserProfile ขึ้นมาเพื่อให้ parent component สามารถ subscribe ได้

  handleMouseOver(): void {
    //this.onUserProfile.emit(); //แจ้ง parent component ว่าเกิดอีเวนต์นี้ขึ้นแล้ว
    // this.onUserProfile.emit("Hello from UserProfileComponent!");
    this.onUserProfile.emit(this.profile().name); //ส่งค่า name ไปยัง parent component
  }

}
