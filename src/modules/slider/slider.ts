import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'cb-slider',
  templateUrl: './slider.html'
})
export class SliderComponent implements OnInit {
  total: number = 0;
  current: number = 0;

  constructor() { }

  ngOnInit() {
    $("#touchSlider").touchSlider({
      sidePage : true,
      roll : false,
      counter: (index) => {
        console.log(index);
        this.current = index.current -1;
      }
    });
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