import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommunityDetailPage } from './community-detail';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { CommunityBiblePageModule } from '../community-bible/community-bible.module';
import { CommunityPrayPageModule } from '../community-pray/community-pray.module';
import { CommunityFeedPageModule } from '../community-feed/community-feed.module';

@NgModule({
  declarations: [
    CommunityDetailPage,
  ],
  imports: [
    CommunityBiblePageModule,
    CommunityPrayPageModule,
    CommunityFeedPageModule,
    IonicPageModule.forChild(CommunityDetailPage),
    SuperTabsModule.forRoot()
  ],
})
export class CommunityDetailPageModule {}
