import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommunityFeedPage } from './community-feed';
import { FeedItemModule } from '../../components/feed-item/feed-item.module';

@NgModule({
  declarations: [
    CommunityFeedPage,
  ],
  imports: [
    IonicPageModule.forChild(CommunityFeedPage),
    FeedItemModule
  ],
})
export class CommunityFeedPageModule {}
