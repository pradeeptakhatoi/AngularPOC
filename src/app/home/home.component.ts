import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  heading = 'Angular POC';
  slider = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.slider = ++this.slider % 3;
    }, 4000);
  }

}
