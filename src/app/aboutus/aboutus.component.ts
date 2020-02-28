import { Component, OnInit } from '@angular/core';
import { CapitalizePipe } from '../_helpers/capitalize.pipe';

import { AdService } from '../ads/ad.service';
import { AdItem } from '../ads/ad-item';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss'],
  providers: [CapitalizePipe]
})
export class AboutusComponent implements OnInit {
  pageHeading = 'about angular poc.';
  ads: AdItem[];

  constructor(private capitalize: CapitalizePipe, private adService: AdService) { }

  ngOnInit(): void {
    this.pageHeading = this.capitalize.transform(this.pageHeading);
    this.ads = this.adService.getAds();
  }

}
