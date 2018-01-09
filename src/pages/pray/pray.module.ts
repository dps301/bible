import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrayPage } from './pray';

@NgModule({
  declarations: [
    PrayPage,
  ],
  imports: [
    IonicPageModule.forChild(PrayPage),
  ],
})
export class PrayPageModule {}
