import { InjectionToken } from '@angular/core';

export const APP_TITLE = new InjectionToken('APP_TITLE', {
  factory: () => 'MyCademy Training',
});
