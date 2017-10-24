import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../services/http.service';

/**
 * Generated class for the MyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class MyPage {
  data;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpService) {
    this.load();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPage');
  }
  load(){
    this.http.get(`/user/mylog`)
    .subscribe(data =>{
      this.data = data.json();
      console.log(this.data)
    })
  }

}
