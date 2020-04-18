import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroRoutingModule } from './hero-routing.module';
import { HeroComponent } from './hero.component';
import { POCSharedModule } from '../shared/poc-shared.module';
import { ViewHeroComponent } from './view/view-hero.component';


@NgModule({
  declarations: [
    HeroComponent,
    ViewHeroComponent
  ],
  imports: [
    CommonModule,
    HeroRoutingModule,
    POCSharedModule
  ],
  entryComponents: [
    ViewHeroComponent
  ]
})
export class HeroModule { }
