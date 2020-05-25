import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayYoutubeVideoComponent } from './play-youtube-video.component';

describe('PlayYoutubeVideoComponent', () => {
  let component: PlayYoutubeVideoComponent;
  let fixture: ComponentFixture<PlayYoutubeVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayYoutubeVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayYoutubeVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
