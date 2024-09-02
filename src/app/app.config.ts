import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { FormsModule} from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { httpInterceptorProviders } from './interceptors';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
     {provide: LOCALE_ID, useValue: 'fr-FR'},
     provideHttpClient(withFetch()),
     httpInterceptorProviders
    ]
};
