import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { CommunityDetailPage } from '../community-detail/community-detail';
import { HttpService } from '../../services/http.service';

@IonicPage()
@Component({
  selector: 'page-community-list',
  templateUrl: 'community-list.html',
})
export class CommunityListPage {

  teams:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, private http:HttpService) {
  }

  ionViewDidLoad() {
    this.load();
  }
  load(){
    this.http.get('/user/team?user_no=1')
    .subscribe(data => {
      this.teams = data.json();
      console.log(this.teams)
    })
  }
  goDetail(team_no) {
    this.app.getRootNav().push(CommunityDetailPage,{team_no:team_no});
  }
}
