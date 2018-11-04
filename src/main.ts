import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Enables HMR
declare const module: any;
if (module.hot) {
    module.hot.accept();
}

platformBrowserDynamic().bootstrapModule(AppModule);