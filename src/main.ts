import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { initializeApp } from 'firebase/app';
import { environment } from './environments/environment';
import { getAnalytics } from 'firebase/analytics';




const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
