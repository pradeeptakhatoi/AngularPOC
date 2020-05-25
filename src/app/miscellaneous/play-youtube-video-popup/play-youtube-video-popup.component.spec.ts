import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayYoutubeVideoPopupComponent } from './play-youtube-video-popup.component';

describe('PlayYoutubeVideoPopupComponent', () => {
  let component: PlayYoutubeVideoPopupComponent;
  let fixture: ComponentFixture<PlayYoutubeVideoPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayYoutubeVideoPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayYoutubeVideoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
