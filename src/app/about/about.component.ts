import { Component, effect, inject } from '@angular/core';
import { TitleService } from '../shared/title.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  private readonly titleService = inject(TitleService);

  constructor() {
    effect(() => {
      this.titleService.setTitle('new about us');
      console.log('AboutComponent initialized');
    })
  }

}
