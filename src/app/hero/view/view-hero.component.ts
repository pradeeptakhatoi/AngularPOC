import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-view-hero',
  templateUrl: './view-hero.component.html',
  styleUrls: ['./view-hero.component.scss'],
})
export class ViewHeroComponent implements OnInit {
  public title: string;
  public closeBtnName: string;
  public hero: any;

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {

  }

}
