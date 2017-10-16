import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { CommunityDetailPage } from '../community-detail/community-detail';

@IonicPage()
@Component({
  selector: 'page-community-list',
  templateUrl: 'community-list.html',
})
export class CommunityListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommunityListPage');
  }

  goDetail() {
    this.app.getRootNav().push(CommunityDetailPage);
  }
}
