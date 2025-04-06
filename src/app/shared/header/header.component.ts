import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  total = 1234.456;
  currentDate = Date.now();
  companyName = 'CodingThailand';
  imageURL = 'https://picsum.photos/200';
  imageAlt = 'ภาพสวยๆ';
  titleClasses = 'title';
  isShow = false;
  users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Mary' }
  ]

  handleClickMe(): void {
    this.companyName = 'CCT';
    this.imageURL = 'https://picsum.photos/250';
    this.isShow = true;
  }

}
