import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-community-bible',
  templateUrl: 'community-bible.html',
})
export class CommunityBiblePage {
  bibleList: Array<any> = [
    ' 1.	태초에 하나님이 천지를 창조하시니라',
     '2.	땅이 혼돈하고 공허하며 흑암이 깊음 위에 있고 하나님의 영은 수면 위에 운행하시니라',
     '3.	하나님이 이르시되 빛이 있으라 하시니 빛이 있었고',
     '4.	빛이 하나님이 보시기에 좋았더라 하나님이 빛과 어둠을 나누사'
   ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }
}
