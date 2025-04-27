import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanMatchFn = (route, segments) => {
  const authService = inject(AuthService);
  const router = inject(Router); //เพื่อใช้สำหรับการนำทาง (navigation) ไปยังเส้นทางอื่น
  
  if (authService.isLogin()) { 
    //ถ้าผู้ใช้ล็อกอิน (true) จะอนุญาตให้เข้าถึงเส้นทางนั้น 
    // (return true)
    return true;
  } else {
    // ถ้าผู้ใช้ยังไม่ได้ล็อกอิน (false) จะนำทางไปยังหน้า /login 
    // และปฏิเสธการเข้าถึงเส้นทางนั้น (return false)
    router.navigate(['/login']);
    return false;
  }
};
