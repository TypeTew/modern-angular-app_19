import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-mat-header',
  imports: [RouterLink, MatToolbarModule, MatButtonModule],
  templateUrl: './mat-header.component.html',
  styleUrl: './mat-header.component.css'
})
export class MatHeaderComponent {

}
