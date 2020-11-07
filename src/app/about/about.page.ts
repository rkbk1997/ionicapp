import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor() { }
  items = [];
  ngOnInit() {
    for (let i = 0 ; i < 100; i++){
      this.items.push(i);
    }
  }
}
