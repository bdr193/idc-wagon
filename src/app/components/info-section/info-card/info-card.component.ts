import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'idc-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {
  cards = [
    {
      icon: "duration.png",
      title: "Duration",
      value: "14 weeks"
    },
    {
      icon: "language.png",
      title: "Language",
      value: "English"
    },
    {
      icon: "location.png",
      title: "Location",
      value: "Tel Aviv - Herzliya"
    },
    {
      icon: "calendar.png",
      title: "Intake",
      value: "June"
    },
    {
      icon: "format.png",
      title: "Format",
      value: "Full-time"
    },
    {
      icon: "cost.png",
      title: "Cost",
      value: "15,000 USD"
    }
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
