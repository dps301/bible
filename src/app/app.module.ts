import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SuperTabsModule } from 'ionic2-super-tabs';

import { HttpModule } from "@angular/http";
import { HttpService } from '../services/http.service';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BiblePageModule } from '../pages/bible/bible.module';
import { MyPageModule } from '../pages/my/my.module';
import { ServerAddr } from '../services/server.addr';
import { SliderModule } from '../modules/slider/slider.module';
import { SquareModule } from '../modules/square/sqare.module';
import { CommunityDetailPageModule } from '../pages/community-detail/community-detail.module';
import { HomePageModule } from '../pages/home/home.module';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    SuperTabsModule.forRoot(),
    IonicModule.forRoot(MyApp, {
      mode: 'ios'
    }),
    HttpModule,
    SliderModule,
    BiblePageModule,
    MyPageModule,
    CommunityDetailPageModule,
    HomePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpService,
    ServerAddr,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
