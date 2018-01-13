import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { CommunityDetailPage } from '../community-detail/community-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  com_list: Array<any> = [];
  
  constructor(public navCtrl: NavController, public app: App) {
    this.getComList();
    this.goDetail(1);
  }

  getComList() {
    this.com_list = [
      {
        id: '',
        name: '사랑하는 가족 성경톡',
        img: 'https://wallpaperbrowse.com/media/images/_89716241_thinkstockphotos-523060154.jpg'
      },
      {
        id: '',
        name: '하심 목요일셀 성경톡',
        img: 'http://kb4images.com/images/random-image/37670495-random-image.jpg'
      },
      {
        id: '',
        name: '오빠랑 하는 큐티',
        img: 'https://wallpaperbrowse.com/media/images/750806.jpg'
      }
    ];
  }

  goDetail(id) {
    this.app.getRootNav().push(CommunityDetailPage, {id: id});
  }
}
