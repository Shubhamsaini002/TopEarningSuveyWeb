import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnalytics, getAnalytics } from '@angular/fire/analytics';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyAZTCFqLrwFz-4v862p5fQB5K_UlFhu-NA",
      authDomain: "topearningsurveyweb.firebaseapp.com",
      projectId: "topearningsurveyweb",
      storageBucket: "topearningsurveyweb.firebasestorage.app",
      messagingSenderId: "954258513314",
      appId: "1:954258513314:web:3b54d4ce3e0fdad668e6fb",
      measurementId: "G-PKYX7Q7K4W",
      databaseURL:"https://topearningsurveyweb-default-rtdb.firebaseio.com"
    })),
    provideDatabase(() => getDatabase()),
    provideAnalytics(() => getAnalytics())]
};
