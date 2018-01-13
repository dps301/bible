import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommunityBiblePage } from './community-bible';
import { SquareModule } from '../../modules/square/sqare.module';

@NgModule({
  declarations: [
    CommunityBiblePage,
  ],
  imports: [
    IonicPageModule.forChild(CommunityBiblePage),
    SquareModule
  ],
})
export class CommunityBiblePageModule {}
