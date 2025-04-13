import { Component } from '@angular/core';
// import { RouterLink } from '@angular/router';
// import { HeaderComponent } from "../shared/header/header.component";
import { FooterComponent } from "../shared/footer/footer.component";


@Component({
  selector: 'app-home',
  imports: [ FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
