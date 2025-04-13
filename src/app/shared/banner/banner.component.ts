import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  title = signal("Welcome to banner");
  isToggle = signal(false);
    banner = signal({
      id: 1,
      title: 'Coke'
    });

  updateData(): void {
    this.title.set("Hello signals");
    this.isToggle.update(value => !value);
      this.banner.update((value) => (
        {
          ...value,
          title: 'Pepsi'
        }
      ));

  }


}
