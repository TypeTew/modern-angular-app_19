import { Component } from '@angular/core';
import { MatHeaderComponent } from "../shared/mat-header/mat-header.component";
// import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [MatHeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
