import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { MosDataEffects } from './store/effects/mos-data.effects';
import { mosDataReducer } from './store/reducers/mos-data.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({}),
    provideState({ name: 'mosData', reducer: mosDataReducer }),
    provideEffects(MosDataEffects),
  ]
};
