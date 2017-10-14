import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommunityBiblePage } from './community-bible';

@NgModule({
  declarations: [
    CommunityBiblePage,
  ],
  imports: [
    IonicPageModule.forChild(CommunityBiblePage),
  ],
})
export class CommunityBiblePageModule {}
