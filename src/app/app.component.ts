import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class AYIP {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private translateService: TranslateService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      translateService.addLangs(["es", "en"]);
      translateService.setDefaultLang('es');
 
      let browserLang = translateService.getBrowserLang();
      translateService.use(browserLang.match(/es|en/) ? browserLang : 'en');
    });
  }
}
