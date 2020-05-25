import { Component, OnInit } from '@angular/core';
import { MiscellaneousService } from '../miscellaneous.service';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { PlayYoutubeVideoPopupComponent } from '../play-youtube-video-popup/play-youtube-video-popup.component';

@Component({
  selector: 'app-play-youtube-video',
  templateUrl: './play-youtube-video.component.html',
  styleUrls: ['./play-youtube-video.component.scss']
})
export class PlayYoutubeVideoComponent implements OnInit {
  youtueVideos: Array<any>;
  playVideoPopupRef: BsModalRef;

  constructor(private miscellaneousService: MiscellaneousService, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.miscellaneousService.getYoutubeVideos().subscribe(data => {
      this.youtueVideos = data;
    }, error => {
      console.log(error);
    });
  }

  watchVideo(videoData) {
    const config: ModalOptions = {
      class: 'modal-lg',
      initialState: {
        video: videoData
      }
    };
    this.playVideoPopupRef = this.modalService.show(PlayYoutubeVideoPopupComponent, config);
    this.playVideoPopupRef.content.closeBtnName = 'Close';
  }

}
