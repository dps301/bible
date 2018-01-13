import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'cb-slider',
  templateUrl: './slider.html'
})
export class SliderComponent implements OnInit {
  prey_list: Array<any> = [];
  current: number = 0;

  constructor() {
  }

  ngOnInit() {
    this.prey_list = [
      {
        thumbnail: 'http://www.nashcountrydaily.com/wp-content/uploads/sites/1446/2016/12/Kane-Brown-1.jpg',
        name: '아빠',
        date: '2018.01.14',
        prey: '이번 주에 있을 수능시험에서 작은 딸이 긴장하지 않고'
      },
      {
        thumbnail: 'http://www.nashcountrydaily.com/wp-content/uploads/sites/1446/2016/12/Kane-Brown-1.jpg',
        name: '아빠',
        date: '2018.01.14',
        prey: '이번 주에 있을 수능시험에서 작은 딸이 긴장하지 않고'
      },
      {
        thumbnail: 'http://www.nashcountrydaily.com/wp-content/uploads/sites/1446/2016/12/Kane-Brown-1.jpg',
        name: '아빠',
        date: '2018.01.14',
        prey: '이번 주에 있을 수능시험에서 작은 딸이 긴장하지 않고'
      },
      {
        thumbnail: 'http://www.nashcountrydaily.com/wp-content/uploads/sites/1446/2016/12/Kane-Brown-1.jpg',
        name: '아빠',
        date: '2018.01.14',
        prey: '이번 주에 있을 수능시험에서 작은 딸이 긴장하지 않고'
      },
      {
        thumbnail: 'http://www.nashcountrydaily.com/wp-content/uploads/sites/1446/2016/12/Kane-Brown-1.jpg',
        name: '아빠',
        date: '2018.01.14',
        prey: '이번 주에 있을 수능시험에서 작은 딸이 긴장하지 않고'
      },
      {
        thumbnail: 'http://www.nashcountrydaily.com/wp-content/uploads/sites/1446/2016/12/Kane-Brown-1.jpg',
        name: '아빠',
        date: '2018.01.14',
        prey: '이번 주에 있을 수능시험에서 작은 딸이 긴장하지 않고'
      }
    ];

    setTimeout(() => {
      $("#touchSlider").touchSlider({
        sidePage : true,
        roll : false,
        counter: (index) => {
          console.log(index);
          this.current = index.current -1;
        }
      });
    }, 500);
  }

  getClass(idx) {
    var ngClass: any = {now: idx == this.current};
    if(idx + 2 == this.current) {
      ngClass.s2  = true;
    }
    else if(idx + 1 == this.current) {
      ngClass.s1  = true;
    }
    else if(idx - 1 == this.current) {
      ngClass.l1  = true;
    }
    else if(idx - 2 == this.current) {
      ngClass.l2  = true;
    }
    return ngClass;
  }
}