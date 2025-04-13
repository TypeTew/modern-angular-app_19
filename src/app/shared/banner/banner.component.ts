import { Component, computed, effect, signal } from '@angular/core';

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

  bannerPrice = signal(500);

  constructor() {
    //effect คือ ฟังก์ชันที่ใช้ในการติดตามการเปลี่ยนแปลงของ signal
    effect(() => {
      // ทำครั้งแรก ครั้งเดียว
      console.log('init banner');
    });
    effect(() => {
      // ทำครั้งแรก และทำอีกครั้งเมื่อตัวแปร signals เปลี่ยนค่า
      console.log(this.title());
      console.log(this.tax());
    });
    effect((onCleanup) => {
      const timer = setTimeout(() => {
        this.title.set('new Modern Angular');
      }, 3000);
      onCleanup(() => {
        clearTimeout(timer);
      })
  });

  }
  tax = computed(() => this.bannerPrice() * 0.07);   //จะอัปเดตอัตโนมัติทุกครั้งที่ค่าในนั้นเปลี่ยน

  updateData(): void {
    this.title.set("Hello signals");
    this.isToggle.update(value => !value);
      this.banner.update((value) => (
        {
          ...value,
          title: 'Pepsi'
        }
      ));
      this.bannerPrice.set(1000);
  }


}
