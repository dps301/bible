import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { HttpService } from '../../services/http.service';

@IonicPage()
@Component({
  selector: 'page-community-bible',
  templateUrl: 'community-bible.html',
})
export class CommunityBiblePage {
  @ViewChild(Slides) slides: Slides;
  team_no: number = -1;
  content: any;
  recent = -1;
  bibleList: Array<any> = [];
  data: any = {
    "board_no": 2,
    "team_no": 1,
    "ord": 2,
    "explanation": "-",
    "reg_dttm": "2017-10-18T11:08:22.000Z",
    "title": "title"
  };
  selected_tab: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpService) {
    this.team_no = this.navParams.get('id');
  }

  ionViewDidLoad() {
    this.load(this.recent);
  }

  slideChanged() {
    if(this.slides.getActiveIndex() > 2)
      this.selected_tab = 2;
    else {
      this.selected_tab = this.slides.getActiveIndex();
    }
  }

  goToSlide(idx) {
    this.slides.slideTo(idx, 500);
  }

  load(no) {
    this.http.get(`/team/board/${no}?team_no=${this.team_no}`)
    .subscribe(data =>{
      this.data = data.json();
      this.bibleList = this.data.bible;
    });
  }

  addComment() {
    let body = {
      content: this.content,
      board_no: this.data.board_no,
      bible: this.bibleList
    };

    this.http.post('/team/board/comment',body)
    .subscribe(data =>{
      this.load(this.recent);
    });
  }
}
