import { Component, OnInit } from '@angular/core';
import { CapitalizePipe } from '../_helpers/capitalize.pipe';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss'],
  providers: [CapitalizePipe]
})
export class AboutusComponent implements OnInit {
  pageHeading = 'about angular poc.';
  constructor(private capitalize: CapitalizePipe) { }

  ngOnInit(): void {
    this.pageHeading = this.capitalize.transform(this.pageHeading);
  }

}
