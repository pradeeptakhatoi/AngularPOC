import { Component, Input, OnInit } from '@angular/core';
import { Faq } from '../models/faq';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
})
export class FaqComponent implements OnInit{

  @Input() faq: Faq;
  @Input() isHidden = false;

  ngOnInit() {
    console.log(this.faq);
  }

}
