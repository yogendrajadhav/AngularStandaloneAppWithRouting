import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isAuthenticated = false; // Replace with actual authentication check logic
const router =inject(Router);
  if (!isAuthenticated) {
    router.navigate(['/']);
    return false;
  }
  return true;
};
