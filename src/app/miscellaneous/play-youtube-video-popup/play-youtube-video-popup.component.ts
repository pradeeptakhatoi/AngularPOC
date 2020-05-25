import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-play-youtube-video-popup',
  templateUrl: './play-youtube-video-popup.component.html',
  styleUrls: ['./play-youtube-video-popup.component.scss']
})
export class PlayYoutubeVideoPopupComponent implements OnInit {
  video: any;
  videoId: string;
  width = 770;

  constructor(public bsModalRef: BsModalRef) {  }

  ngOnInit(): void {
    this.videoId = this.getParameterByName(this.video.url, 'v');
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  getParameterByName(url: string, name: string) {
    url = url || window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(url);
    if (!results) { return null; }
    if (!results[2]) { return ''; }
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

}
