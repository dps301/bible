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
import { CommunityListPageModule } from '../pages/community-list/community-list.module';
import { BiblePageModule } from '../pages/bible/bible.module';
import { MyPageModule } from '../pages/my/my.module';
import { ServerAddr } from '../services/server.addr';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    CommunityListPageModule,
    BiblePageModule,
    MyPageModule,
    SuperTabsModule.forRoot(),
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
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
