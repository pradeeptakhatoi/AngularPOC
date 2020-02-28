import { Component, OnInit, Input } from '@angular/core';
import { AdComponent } from '../ad.component';

@Component({
  selector: 'app-ad1',
  templateUrl: './ad1.component.html',
  styleUrls: ['./ad1.component.scss']
})
export class Ad1Component implements OnInit, AdComponent {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
