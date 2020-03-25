import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TvmazeComponent } from './tvmaze.component';
import { PosterComponent } from './poster/poster.component';



@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [TvmazeComponent, PosterComponent],
  exports: [TvmazeComponent, PosterComponent]
})
export class TvmazeModule { }
