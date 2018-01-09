import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../services/http.service';

@IonicPage()
@Component({
  selector: 'page-community-bible',
  templateUrl: 'community-bible.html',
})
export class CommunityBiblePage {
  team_no;
  content;
  recent = -1;
  data:any={
    "board_no": 2,
    "team_no": 1,
    "ord": 2,
    "explanation": "-",
    "reg_dttm": "2017-10-18T11:08:22.000Z",
    "title":"title"
    };
  bibleList: Array<any>

  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpService) {
    this.team_no = this.navParams.get('team_no')
  }

  ionViewDidLoad() {
    this.load(this.recent);
  }
  load(no){
    this.http.get(`/team/board/${no}?team_no=${this.team_no}`)
    .subscribe(data =>{
      this.data = data.json();
      this.bibleList = this.data.bible;
    })
  }
  addComment(){
    let body = {
      content:this.content,
      board_no:this.data.board_no,
      bible:this.bibleList
    }
    this.http.post('/team/board/comment',body)
    .subscribe(data =>{
      this.load(this.recent);
    })
  }
}
