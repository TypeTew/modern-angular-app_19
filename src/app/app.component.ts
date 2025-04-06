import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogoComponent } from "./shared/logo/logo.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LogoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'modern-angular-app_19';
}
