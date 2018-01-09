import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommunityListPage } from './community-list';
import { CommunityDetailPageModule } from '../community-detail/community-detail.module';

@NgModule({
  declarations: [
    CommunityListPage,
  ],
  imports: [
    IonicPageModule.forChild(CommunityListPage),
    CommunityDetailPageModule
  ],
})
export class CommunityListPageModule {}
