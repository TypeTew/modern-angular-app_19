import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']

})
export class LogoComponent {

}
