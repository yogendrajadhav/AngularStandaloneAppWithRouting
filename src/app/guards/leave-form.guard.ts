import { CanDeactivateFn } from '@angular/router';

export interface CanExit {
  canExit: () => boolean;
}

export const leaveFormGuard: CanDeactivateFn<CanExit> = (component, currentRoute, currentState, nextState) => {
  debugger;
  console.log('Guard triggered');
  return component.canExit ? component.canExit() : true;
};
