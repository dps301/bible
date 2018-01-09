import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommunityFeedPage } from './community-feed';

@NgModule({
  declarations: [
    CommunityFeedPage,
  ],
  imports: [
    IonicPageModule.forChild(CommunityFeedPage),
  ],
})
export class CommunityFeedPageModule {}
