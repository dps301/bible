import { Component, ViewChild, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommunityPrayPage } from '../community-pray/community-pray';
import { CommunityBiblePage } from '../community-bible/community-bible';
import { CommunityFeedPage } from '../community-feed/community-feed';
import { SuperTabs } from 'ionic2-super-tabs';


@IonicPage()
@Component({
  selector: 'page-community-detail',
  templateUrl: 'community-detail.html',
})
export class CommunityDetailPage {
  @ViewChild(SuperTabs) superTabs: SuperTabs;
  
  team_no:any;

  page1: any = CommunityBiblePage;
  page2: any = CommunityPrayPage;
  page3: any = CommunityFeedPage;
  paramsTab;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team_no = this.navParams.get('team_no');
    this.paramsTab = { team_no: this.team_no };
  }

  ionViewDidLoad() {
    this.superTabs.enableTabsSwipe(false);
    console.log('ionViewDidLoad CommunityDetailPage');
  }
}
