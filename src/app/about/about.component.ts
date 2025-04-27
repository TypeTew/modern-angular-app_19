import { Component, effect, inject } from '@angular/core';
import { TitleService } from '../shared/title.service';
import { AppUtilService } from '../shared/app-util.service';
import { Observable } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { MatHeaderComponent } from "../shared/mat-header/mat-header.component";

@Component({
  selector: 'app-about',
  imports: [AsyncPipe, JsonPipe, MatHeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  private readonly titleService = inject(TitleService);

  private readonly appUtilService = inject(AppUtilService);
  versionInfo$!: Observable<any>;

  constructor() {
    effect(() => {
      this.titleService.setTitle('new about us');
      this.versionInfo$ = this.appUtilService.getAPIVersion();
      //console.log('AboutComponent initialized');
    })
  }

}
