import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  data = [
    {
      title : "Bag 1",
      description: "This is small bag",
      price: "40",
      image: "bag1.jpg"
    },
    {
      title : "Bag 2",
      description: "This is medium bag",
      price: "100",
      image: "bag2.jpg"
    },
    {
      title : "Bag 3",
      description: "This is Large bag",
      price: "140",
      image: "bag3.jpg"
    }
  ]
}
