import { CanActivateFn, Router } from '@angular/router';
export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('access_token');
  if (!token) {
    const router = new Router(); // mejor inyectar usando environment
    // injector; aquí atajo conceptual
    router.navigateByUrl('/auth/login');
    return false;
  }
  return true;
};
