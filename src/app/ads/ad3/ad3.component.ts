import { Component, OnInit, Input } from '@angular/core';
import { AdComponent } from '../ad.component';

@Component({
  selector: 'app-ad3',
  templateUrl: './ad3.component.html',
  styleUrls: ['./ad3.component.scss']
})
export class Ad3Component implements OnInit, AdComponent {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
