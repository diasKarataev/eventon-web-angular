import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {NGX_LOCAL_STORAGE_CONFIG} from "ngx-localstorage";

export const appConfig: ApplicationConfig = {
  providers:
    [
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(routes),
      provideHttpClient(),
      {
        provide: NGX_LOCAL_STORAGE_CONFIG,
        useValue: {
          prefix: 'demo',
          delimiter: '@'
        }
      }
    ]
};
