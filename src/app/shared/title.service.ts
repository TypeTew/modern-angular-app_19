import { inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private readonly domTitle = inject(Title);

  setTitle(title: string) {
    this.domTitle.setTitle(title);
  }

}
