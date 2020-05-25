import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-play-video",
  templateUrl: "./play-video.component.html",
  styleUrls: ["./play-video.component.scss"],
})
export class PlayVideoComponent implements OnInit {
  @Input() video: any;
  videoType: string;
  videoId: string;
  width = 770;

  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
  isPlay = false;

  constructor() {}

  ngOnInit(): void {
    if (this.video.url.includes("www.youtube.com")) {
      this.videoType = "youtube";
      this.videoId = this.getParameterByName(this.video.url, "v");
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    } else {
      this.videoType = "html5";
    }
  }

  getParameterByName(url: string, name: string) {
    url = url || window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    const results = regex.exec(url);
    if (!results) {
      return null;
    }
    if (!results[2]) {
      return "";
    }
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  // Html5 video controls start
  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }

  playPause() {
    const myVideo: any = document.getElementById("html5Video");
    if (myVideo.paused) {
      myVideo.play();
    } else {
      myVideo.pause();
    }
  }

  makeBig() {
    const myVideo: any = document.getElementById("html5Video");
    myVideo.width = 560;
  }

  makeSmall() {
    const myVideo: any = document.getElementById("html5Video");
    myVideo.width = 320;
  }

  makeNormal() {
    const myVideo: any = document.getElementById("html5Video");
    myVideo.width = 420;
  }

  skip(value) {
    const video: any = document.getElementById("html5Video");
    video.currentTime += value;
  }

  restart() {
    const video: any = document.getElementById("html5Video");
    video.currentTime = 0;
  }
  // Html5 video controls end

}
