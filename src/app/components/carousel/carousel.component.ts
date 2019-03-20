import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'idc-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() slides: {
    title: string,
    date: string,
    text: string,
    list: string[]
  }[]

  constructor() { }

  ngOnInit() {
  }

}
