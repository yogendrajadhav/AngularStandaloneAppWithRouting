import { CanActivateFn } from '@angular/router';
import { delay, map, of } from 'rxjs';

export const roleGuard: CanActivateFn = (route, state) => {
  
  const requiredRoles = route.data?.['roles']??[]; // Get the required roles from route data
    // Simulate async user role fetch
 // const userRoles = ['admin', 'user']; // Replace with actual user roles from your auth service by suscribing to an observable
  const userRoles = ['a', 'user']; // Replace with actual user roles from your auth service by suscribing to an observable
  return of(userRoles).pipe(
    // Check if user has any of the required roles
    delay(1000), // Simulate network delay
    map((roles: string | string[]) => {
    // Ensure roles is an array
     const hasRequiredRoles = requiredRoles.some((role: string) => roles.includes(role));
    // Return true if user has required roles, false otherwise
    if(!hasRequiredRoles) {
      alert('Access Denied!');
      console.warn('Access denied - insufficient roles');
      return false;
    }
     return hasRequiredRoles;
    }) // map end

    ); //pipe end

};
