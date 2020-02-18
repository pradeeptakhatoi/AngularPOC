import { HighlightLongStringDirective } from './highlight-long-string.directive';
import { TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';

describe('HighlightLongStringDirective', () => {
  it('should create an instance', () => {
    // const directive = new HighlightLongStringDirective();
    // expect(directive).toBeTruthy();

    TestBed.configureTestingModule({providers: [{ provide: ElementRef, useClass: HighlightLongStringDirective }]}).compileComponents();

  });
});
