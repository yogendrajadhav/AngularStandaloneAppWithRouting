import { ResolveFn } from '@angular/router';
import { of } from 'rxjs';

export const userResolver: ResolveFn<any> = (route, state) => {
  const userId = route.paramMap.get('id');
  // Simulate API call
  //return of({ id: userId, name: `User ${userId}` });
 const user = { id: userId, name: `User ${userId}` };
  return user;
  // In a real application, you would replace the above line with an actual API call
  // to fetch user data based on the userId and return a boolean indicating success.
};
