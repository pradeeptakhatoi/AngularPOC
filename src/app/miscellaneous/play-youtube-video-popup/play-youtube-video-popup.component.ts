import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-play-youtube-video-popup',
  templateUrl: './play-youtube-video-popup.component.html',
  styleUrls: ['./play-youtube-video-popup.component.scss']
})
export class PlayYoutubeVideoPopupComponent implements OnInit {
  video: any;

  constructor(public bsModalRef: BsModalRef) {  }

  ngOnInit(): void { }

}
