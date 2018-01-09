import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'cb-slider',
  templateUrl: './slider.html'
})
export class SliderComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    $("#touchSlider").touchSlider({
      sidePage : true,
      roll : false
    });
  }
}