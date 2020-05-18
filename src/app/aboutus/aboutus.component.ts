import { Component, OnInit } from '@angular/core';
import { CapitalizePipe } from '../_helpers/capitalize.pipe';
import { Router } from '@angular/router';

import { AdService } from '../ads/ad.service';
import { AdItem } from '../ads/ad-item';

@Component({
  selector: "app-aboutus",
  templateUrl: "./aboutus.component.html",
  styleUrls: ["./aboutus.component.scss"],
  providers: [CapitalizePipe],
})
export class AboutusComponent implements OnInit {
  pageHeading = "about angular poc.";
  ads: AdItem[];
  showIndentifier = 326;
  counter = 0;

  constructor(
    private capitalize: CapitalizePipe,
    private adService: AdService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pageHeading = this.capitalize.transform(this.pageHeading);
    this.ads = this.adService.getAds();
    this.testTimer();
  }

  onClick() {
    this.router.navigateByUrl("post/viewpost/1").then(() => {
      this.counter++;
    });
  }

  testTimer() {
    setTimeout(() => {
      this.counter++;
    }, 2000);
  }
}
