import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiscellaneousService {

  constructor(private http: HttpClient) {}

  getYoutubeVideos() {
    return this.http.get<Array<any>>('../../assets/data/youtube_videos.json');
  }

}
