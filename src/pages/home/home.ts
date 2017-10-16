import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CommunityListPage } from '../community-list/community-list';
import { MyPage } from '../my/my';
import { BiblePage } from '../bible/bible';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  page1: any = CommunityListPage;
  page2: any = MyPage;
  page3: any = BiblePage;

  constructor(public navCtrl: NavController) {

  }

}
