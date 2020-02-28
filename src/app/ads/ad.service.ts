import { Injectable } from '@angular/core';

import { AdItem } from './ad-item';
import { Ad1Component } from './ad1/ad1.component';
import { Ad2Component } from './ad2/ad2.component';
import { Ad3Component } from './ad3/ad3.component';


@Injectable({
  providedIn: 'root'
})
export class AdService {
  getAds() {
    return [
      new AdItem(Ad1Component, { title: 'Mother Nature…', img: 'assets/img/MotherNature.jpg' }),

      new AdItem(Ad2Component, { title: 'People Nowadays…', img: 'assets/img/PeopleNowadays.png' }),

      new AdItem(Ad3Component, {
        title: 'Hard work..', desc: 'We can divide carousel in two category – \
      one is a static carousel and another is a dynamic carousel. Static one is the one, we have hardcoded \
      it and its data is not going to change with time until we change it. Dynamic one is the which data is added dynamically.' })
    ];
  }
}
