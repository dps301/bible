import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { CommunityDetailPageModule } from '../community-detail/community-detail.module';
import { SquareModule } from '../../modules/square/sqare.module';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    SquareModule,
    CommunityDetailPageModule
  ],
})
export class HomePageModule {}
