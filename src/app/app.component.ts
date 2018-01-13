import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { Events } from 'ionic-angular/util/events';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('container') nav: NavController;
  rootPage: any = HomePage;
  show_back: boolean = false;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController, public events: Events) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
    events.subscribe('show-button', (val) => {
      this.show_back = val;
    });
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  navGo() {
    this.nav.setRoot(this.rootPage);
    this.toggleMenu();
  }
}

