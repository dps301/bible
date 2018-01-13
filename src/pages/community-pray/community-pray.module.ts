import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommunityPrayPage } from './community-pray';
import { SliderModule } from '../../modules/slider/slider.module';

@NgModule({
  declarations: [
    CommunityPrayPage,
  ],
  imports: [
    IonicPageModule.forChild(CommunityPrayPage),
    SliderModule
  ],
})
export class CommunityPrayPageModule {}
