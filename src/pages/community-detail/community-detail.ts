import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommunityPrayPage } from '../community-pray/community-pray';
import { CommunityBiblePage } from '../community-bible/community-bible';
import { CommunityFeedPage } from '../community-feed/community-feed';


@IonicPage()
@Component({
  selector: 'page-community-detail',
  templateUrl: 'community-detail.html',
})
export class CommunityDetailPage {
  page1: any = CommunityBiblePage;
  page2: any = CommunityPrayPage;
  page3: any = CommunityFeedPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommunityDetailPage');
  }

}
